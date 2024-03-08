const models = require("../../../models");
const { Op } = require("sequelize");
const { success, error } = require("../../../helpers/utility/response");
const moment = require("moment");
const { sequelize } = require("../../../models");
const { default: axios } = require("axios");

exports.cariKaryawan = (req, res) => {
  const { no_pegawai } = req.query;
  return models.mst_test_kebugaran
    .findOne({
      where: {
        no_pegawai: no_pegawai,
      },
    })
    .then((pegawai) => {
      if (!pegawai) {
        throw new Error(`Data ${no_pegawai} tidak ditemukan`);
      }
      return success(req, res, pegawai, "Berhasil Cari.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal Cari", 500, err);
    });
};

exports.createKebugaran = (req, res) => {
  const { no_pegawai, nilai_vo, waktu, hasil } = req.body;
  if (!no_pegawai || !nilai_vo || !waktu || !hasil) {
    return error(req, res, {}, "Isi Paramaeter", 400, null);
  }
  return models.trx_test_kebugaran
    .create({
      no_pegawai,
      nilai_vo,
      waktu,
      hasil,
    })
    .then((pegawai) => {
      if (!pegawai) {
        throw new Error(`Gagal Insert`);
      }
      return success(req, res, pegawai, "Berhasil instert.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.tambahRockport = (req, res) => {
  const { no_pegawai, nilai_vo, waktu, hasil, umur, kelamin, mulai, finish } =
    req.body;
  if (!nilai_vo || !waktu || !hasil) {
    return error(req, res, {}, "Isi Paramaeter", 400, null);
  }
  const { mr, no_telp } = req.user;
  return models.trx_rockport
    .create({
      no_pegawai,
      nilai_vo,
      waktu,
      hasil,
      ps_mrn: mr,
      umur: umur,
      kelamin: kelamin,
      mulai: mulai,
      finish: finish,
    })
    .then((pegawai) => {
      if (!pegawai) {
        throw new Error(`Gagal Insert`);
      }
      return success(req, res, pegawai, "Berhasil instert.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.historyRockport = (req, res) => {
  // if (!nilai_vo || !waktu || !hasil) {
  //   return error(req, res, {}, "Isi Paramaeter", 400, null);
  // }
  const { mr } = req.user;
  return models.trx_rockport
    .findAll({
      where: {
        ps_mrn: mr,
      },
      order: [["rockport_id", "desc"]],
    })
    .then((rockport) => {
      if (!rockport) {
        throw new Error(`Gagal Insert`);
      }
      return success(req, res, rockport, "Berhasil instert.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};

exports.tambahIMT = (req, res) => {
  const { imt_hasil, range_imt, klasifikasi, tinggi_badan, berat_badan } =
    req.body;
  if (!imt_hasil || !range_imt || !klasifikasi) {
    return error(req, res, {}, "Isi Paramaeter", 400, null);
  }
  const { mr, no_telp } = req.user;
  return models.trx_imt
    .create({
      imt_hasil,
      range_imt,
      klasifikasi,
      ps_mrn: mr,
      berat_badan,
      tinggi_badan,
    })
    .then((imt) => {
      if (!imt) {
        throw new Error(`Gagal Insert`);
      }
      return success(req, res, imt, "Berhasil instert.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal batal", 500, err);
    });
};