const models = require("../../../models");
const { Op } = require("sequelize");
const { success, error } = require("../../../helpers/utility/response");
const moment = require("moment");
const { sequelize } = require("../../../models");
const { default: axios } = require("axios");
const { pagination } = require("../../../helpers/utility/common");
const { funcSendFcm } = require("../Firebase/cloudMessagingController");
const { globalLogger } = require("../../../helpers/utility/logger");

exports.fetchHelpDesk = (req, res) => {
  const { page, type } = req.query;
  // type : 1 prosess, 2 waitng, 3 skipped
  const { peg_id } = req.user;

  const { limit, offset } = pagination(page > 0 ? page : 1);
  const findType = (type) => {
    if (type == 1) {
      return {
        hdesk_id_layanan: 1121,
        hdesk_id_peg_respon: peg_id,
        // hdesk_id_peg_respon: {
        //   [Op.not]: null,
        // },
        [Op.and]: [
          { hdesk_tgl_input: { [Op.lte]: moment().format("YYYY-MM-DD") } },
          {
            hdesk_tgl_input: {
              [Op.gte]: moment().subtract(7, "d").format("YYYY-MM-DD"),
            },
          },
        ],
      };
    } else if (type == 3) {
      return {
        hdesk_id_layanan: 1121,
        // [Op.or]: {
        // hdesk_selesai: false,
        hdesk_id_peg_respon: null,
        // },
        [Op.and]: [
          { hdesk_tgl_input: { [Op.lt]: moment().format("YYYY-MM-DD") } },
          {
            hdesk_tgl_input: {
              [Op.gte]: moment().subtract(30, "d").format("YYYY-MM-DD"),
            },
          },
        ],
        // hdesk_tgl_input: {
        //   [Op.gte]: moment().subtract(30, "d").format("YYYY-MM-DD"),
        // },
      };
    } else if (type === 2) {
      return {
        hdesk_id_layanan: 1121,
        // [Op.or]: {
        // hdesk_selesai: false,
        hdesk_id_peg_respon: null,
        // },
        [Op.and]: [
          { hdesk_tgl_input: { [Op.lte]: moment().format("YYYY-MM-DD") } },
          {
            hdesk_tgl_input: {
              [Op.gte]: moment().subtract(7, "d").format("YYYY-MM-DD"),
            },
          },
        ],
      };
    } else if (type === 4) {
      return {
        hdesk_id_layanan: 1121,
        hdesk_id_peg: peg_id,
        [Op.and]: [
          { hdesk_tgl_input: { [Op.lte]: moment().format("YYYY-MM-DD") } },
          {
            hdesk_tgl_input: {
              [Op.gte]: moment().subtract(7, "d").format("YYYY-MM-DD"),
            },
          },
        ],
      };
    } else {
      return {
        hdesk_id_layanan: 1121,
        // [Op.or]: {
        // hdesk_selesai: false,
        hdesk_id_peg_respon: null,
        // },
        [Op.and]: [
          { hdesk_tgl_input: { [Op.lte]: moment().format("YYYY-MM-DD") } },
          {
            hdesk_tgl_input: {
              [Op.gte]: moment().subtract(7, "d").format("YYYY-MM-DD"),
            },
          },
        ],
      };
    }
  };

  return models.helpdesk
    .findAll({
      //   limit,
      //   offset,
      order: [
        ["hdesk_selesai", "asc"],
        ["hdesk_id", "desc"],
      ],
      include: [
        {
          model: models.helpdesk_detail,
          as: "detail",
          // required: true,
        },
        {
          model: models.pegawai,
          as: "pegawai",
          attributes: ["peg_id", "peg_nama"],
          required: true,
        },
      ],
      where: findType(type),
    })
    .then((helpdesk) => {
      return Promise.all([
        models.helpdesk.count({
          where: findType(1),
        }),
        models.helpdesk.count({
          where: findType(2),
        }),
        models.helpdesk.count({
          where: findType(3),
        }),
        models.helpdesk.count({
          where: findType(4),
        }),
      ]).then((count) => {
        return success(
          req,
          res,
          {
            list: helpdesk,
            group: {
              1: count[0],
              2: count[1],
              3: count[2],
              4: count[3],
            },
          },
          "Termuat",
          200
        );
      });
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.responseHelpDesk = (req, res) => {
  const { id } = req.params;
  let { peg_id } = req.user;

  return models.helpdesk
    .update(
      {
        hdesk_id_peg_respon: peg_id,
        hdesk_tgl_wkt_respon: moment().format(),
      },
      {
        where: {
          hdesk_id: id,
        },
      }
    )
    .then(() => {
      return models.helpdesk.findOne({
        where: {
          hdesk_id: id,
        },
      });
    })
    .then((helpdesk) => {
      return success(req, res, helpdesk, "Berhasil respon", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.pindahHelpdesk = (req, res) => {
  const { id, id_layanan } = req.body;
  if (!id_layanan) {
    return error(req, res, {}, "isi Layanan", 400, null);
  }
  return models.helpdesk
    .update(
      {
        hdesk_id_layanan: id_layanan,
      },
      {
        where: {
          hdesk_id: id,
        },
      }
    )
    .then((helpdesk) => {
      return success(req, res, helpdesk, "Berhasil pindah", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.selesaiHelpdesk = (req, res) => {
  const { id, respon, kategori } = req.body;
  let { peg_id } = req.user;

  return models.helpdesk
    .update(
      {
        hdesk_selesai: true,
        hdesk_tgl_selesai: moment().format(),
        hdesk_wkt_selesai: moment().format(),
        hdesk_id_kategori: kategori,
      },
      {
        where: {
          hdesk_id: id,
        },
      }
    )
    .then(() => {
      return models.helpdesk_detail
        .findOne({
          where: {
            hdesk_dt_id_head: id,
          },
        })
        .then((dt) => {
          if (!dt) {
            return models.helpdesk_detail.create({
              hdesk_dt_id_head: id,
              hdesk_dt_tgl_wkt_input: moment().format(),
              hdesk_dt_id_peg_input: peg_id,
              hdesk_dt_id_peg_teknisi: peg_id,
              hdesk_dt_ket: respon,
              hdesk_dt_tgl_wkt_selesai: moment().format(),
              // hdesk_dt_id_ket: kategori,
            });
          }
        });
    })
    .then(() => {
      return models.helpdesk.findOne({
        include: [
          {
            model: models.helpdesk_detail,
            as: "detail",
            // required: true,
          },
          {
            model: models.pegawai,
            as: "pegawai",
            attributes: ["peg_id", "peg_nama"],
            required: true,
          },
        ],
        where: {
          hdesk_id: id,
        },
      });
    })
    .then((helpdesk) => {
      return success(req, res, helpdesk, "Berhasil selesai", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.fetchNotifHelpdesk = () => {
  console.log("Cron Helpdesk");
  return models.helpdesk
    .count({
      where: {
        hdesk_tgl_wkt_input: {
          [Op.gte]: moment().subtract(10, "minutes").format(),
        },
        [Op.or]: {
          hdesk_selesai: false,
          hdesk_id_peg_respon: null,
        },
        hdesk_id_layanan: 1121,
      },
    })
    .then((helpdesk) => {
      if (helpdesk < 1) {
        return;
      }
      return models.pegawai
        .findAll({
          include: [
            {
              model: models.pegawai_in_grup,
              as: "in_grup",
              required: true,
              where: {
                peg_in_grp_id_grup: 18,
              },
            },
            {
              model: models.mst_firebase,
              as: "firebase",
              required: true,
              where: {
                firebase_clnt_token: {
                  [Op.not]: null,
                },
              },
            },
          ],
        })
        .then((pegawai) => {
          return Promise.all(
            pegawai.map((item) => {
              return (arr = funcSendFcm({
                title: "Code Helpdesk!",
                body: "we need ur help comrade!",
                to: item.firebase.firebase_clnt_token,
              }));
            })
          );
        });
    })
    .then((helpdesk) => {
      return true;
    })
    .catch((err) => {
      globalLogger(err);
      return err;
    });
};

exports.buatHelpdesk = (req, res) => {
  const { lokasi, pesan } = req.body;
  let { peg_id } = req.user;
  if (!lokasi || !pesan) {
    return error(req, res, {}, "Mohon isi Lokasi & Pesan", 400, null);
  }
  return models.helpdesk
    .create({
      hdesk_lokasi: lokasi,
      hdesk_pesan: pesan,
      hdesk_id_peg: peg_id,
      hdesk_tgl_input: moment().format("YYYY-MM-DD"),
      hdesk_tgl_wkt_input: moment().format(),
      hdesk_id_layanan: 1121,
    })
    .then((helpdesk) => {
      return models.helpdesk.findOne({
        include: [
          {
            model: models.helpdesk_detail,
            as: "detail",
            // required: true,
          },
          {
            model: models.pegawai,
            as: "pegawai",
            attributes: ["peg_id", "peg_nama"],
            required: true,
          },
        ],
        where: {
          hdesk_id: helpdesk.hdesk_id,
        },
      });
    })
    .then((helpdesk) => {
      return success(req, res, helpdesk, "Berhasil Tambah", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal", 500, err);
    });
};
