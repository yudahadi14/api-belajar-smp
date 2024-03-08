const { error, success } = require("../../helpers/utility/response");
const models = require("../../models");
const md5 = require("md5");
const {
  signRefreshJwt,
  signAuthJwt,
  regenerateToken,
  signForgetJwtPwd,
  verifyForgetJwtPwd,
  signRefreshIgdJwt,
  signAuthIgdJwt,
} = require("../../helpers/utility/jwt");
const { QueryTypes, Op } = require("sequelize");
const { sequelize } = require("../../models");
const {
  maskString,
  maskEmail,
  stringToMR,
} = require("../../helpers/utility/common");
const { default: axios } = require("axios");
const customMailer = require("../../helpers/utility/Mailer/customMailer");
exports.refreshToken = (req, res) => {
  const refresh_token = req.header("x-refresh-token");

  if (!refresh_token) {
    return error(req, res, {}, "Mohon isi refreshToken!.", 401);
  }

  const verified = regenerateToken(refresh_token);
  if (verified.error) {
    if (verified.error.name === "JsonWebTokenError") {
      return error(req, res, {}, "Ada Kesalahan", 500, null);
    } else if (verified.error.name == "TokenExpiredError") {
      return error(req, res, {}, "Token Expired!.", 401);
    } else {
      return error(req, res, {}, "Ada Kesalahan", 500, null);
    }
  }

  return models.user_mobile_child
    .findOne({
      where: {
        user_mobile_id: verified.id_user,
        user_mobile_token: refresh_token,
      },
    })
    .then((granted) => {
      if (!granted) {
        return error(req, res, {}, "Mohon Login Ulang", 401,false);
      }
      return success(
        req,
        res,
        signAuthJwt({
          id_user: verified.id_user,
          mr: verified.mr,
          nama: verified.nama,
          tgl_lahir: verified.tgl_lahir,
          no_telp: verified.no_telp,
          email: verified.email,
        }),
        "Token diberikan."
      );
    })
    .catch((err) => {
      return error(req, res, {}, "Not Authenticated", 401, err);
    });
};
const _getUser = (no_tlp, email, no_mr) => {
  const user = () => {
    if (no_mr) {
      return models.user_mobile.findOne({
        where: {
          mr: no_mr,
        },
      });
    } else if (email) {
      return models.user_mobile.findOne({
        where: {
          email: email,
        },
      });
    } else if (no_tlp) {
      return models.user_mobile.findOne({
        where: {
          no_telp: no_tlp,
        },
      });
    } else {
      return new Promise((resolve, reject) => {
        reject("Isi salah satu");
      });
    }
  };
  const promise = new Promise((resolve, reject) => {
    resolve(user());
  })
    .then((user) => {
      if (!user) {
        throw new Error("User tidak ada");
      }
      return models.pasien
        .findOne({
          raw: true,
          where: {
            ps_mrn: stringToMR(user.mr),
          },
          include: {
            model: models.asp_pasien,
            required: true,
            as: "asp_pasien",
            attributes: ["ps_no_jmn_non_cash", "ps_id", "ps_jeniskelamin"],
          },
        })
        .then((pasien) => {
          return {
            ...user.dataValues,
            ...pasien,
            asp_pasien: {
              ps_no_jmn_non_cash: pasien["asp_pasien.ps_no_jmn_non_cash"],
              ps_jeniskelamin: pasien["asp_pasien.ps_jeniskelamin"],
            },
          };
        });
    })
    .then((pasien) => {
      delete pasien["asp_pasien.ps_no_jmn_non_cash"];
      delete pasien["asp_pasien.ps_id"];
      // delete pasien.password;
      return pasien;
    });
  return promise;
};

exports.resetByPass = (req, res) => {
  let { no_mr } = req.query;
  if (!no_mr) {
    return error(req, res, {}, "Isi No MR", 400);
  }

  return models.user_mobile
    .update(
      {
        password: md5(no_mr),
        email: null,
        no_telp: null,
      },
      {
        where: {
          mr: no_mr,
        },
      }
    )
    .then((pasien) => {
      return success(req, res, pasien, "Pasien berhasil diupdate.");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal update", 500, err);
    });
};
exports.getToken = (req, res) => {
  let { no_tlp, email, no_mr, password } = req.body;

  _getUser(no_tlp, email, no_mr)
    .then((payload) => {
      if (!payload) {
        throw Error("User tidak ditemukan");
      }
      let authToken = signAuthJwt({
        id_user: payload.id_user,
        mr: payload.mr,
        nama: payload.nama,
        tgl_lahir: payload.tgl_lahir,
        no_telp: payload.no_telp,
        email: payload.email,
        password: "",
        ...payload,
      });
      let refreshToken = signRefreshJwt({
        id_user: payload.id_user,
        mr: payload.mr,
        nama: payload.nama,
        tgl_lahir: payload.tgl_lahir,
        no_telp: payload.no_telp,
        email: payload.email,
        password: "",
        ...payload,
      });
      if (payload.password == md5(password)) {
        return models.user_mobile_child
          .create({
            user_mobile_token: refreshToken,
            user_mobile_id: payload.id_user,
          })
          .then(() => {
            return success(
              req,
              res,
              {
                authToken: authToken,
                refreshToken: refreshToken,
                data_pasien: {
                  mr: payload.mr,
                  nama: payload.nama,
                  tgl_lahir: payload.tgl_lahir,
                  no_telp: payload.no_telp,
                  email: payload.email,
                  ...payload,
                  password: "",
                },
              },
              "User termuat",
              200
            );
          });
      } else {
        throw Error("Username / password tidak sesuai");
      }
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal mendaftar", 500, err);
    });
};

exports.getTokenAdmin = (req, res) => {
  let { username, password } = req.body;
  const getUser = () => {
    const query = `SELECT * from pegawai where peg_aktif is true and peg_username = :uname and peg_passwd = CRYPT(:password,peg_passwd)`;
    // return models.pegawai.findOne({
    //   where: {
    //     peg_username: username,
    //   },
    // });
    return models.sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: {
        uname: username,
        password: password,
      },
    });
  };

  const promise = new Promise((resolve, reject) => {
    resolve(getUser());
  });

  promise
    .then((payload) => {
      if (payload.length < 1) {
        throw new Error("User Tidak Ditemukan");
        // return error(req, res, {}, "User Tidak Ditemukan", 401);
      }
      let authToken = signAuthJwt({
        peg_id: payload[0].peg_id,
        peg_nama: payload[0].peg_nama,
      });
      let refreshToken = signRefreshJwt({
        peg_id: payload[0].peg_id,
        peg_nama: payload[0].peg_nama,
      });
      return models.user_mobile_child
        .create({
          user_mobile_token: refreshToken,
          peg_id: payload[0].peg_id,
        })
        .then(() => {
          return {
            authToken: authToken,
            refreshToken: refreshToken,
            data_pegawai: {
              peg_id: payload[0].peg_id,
              peg_nama: payload[0].peg_nama,
            },
          };
        });
    })
    .then((payload) => {
      return success(req, res, payload, "User termuat", 200);
    })
    .catch((err) => {
      return error(
        req,
        res,
        {},
        "Gagal memuat",
        err.message === "User Tidak Ditemukan" ? 401 : 500,
        err
      );
    });
};

exports.refreshTokenAdmin = (req, res) => {
  const refresh_token = req.header("x-refresh-token");

  if (!refresh_token) {
    return error(req, res, {}, "Mohon isi refreshToken!.", 401);
  }

  const verified = regenerateToken(refresh_token);
  if (verified.error) {
    if (verified.error.name === "JsonWebTokenError") {
      return error(req, res, {}, "Ada Kesalahan", 401, null);
    } else if (verified.error.name == "TokenExpiredError") {
      return error(req, res, {}, "Token Expired!.", 401);
    } else {
      return error(req, res, {}, "Ada Kesalahan", 500, null);
    }
  }

  return models.user_mobile_child
    .findOne({
      where: {
        peg_id: verified.peg_id,
        user_mobile_token: refresh_token,
      },
    })
    .then((granted) => {
      if (!granted) {
        throw new Error("Not Authenticated");
      }
      return success(
        req,
        res,
        signAuthJwt({
          peg_id: verified.peg_id,
          peg_nama: verified.peg_nama,
        }),
        "Token diberikan."
      );
    })
    .catch((err) => {
      return error(req, res, {}, "Not Authenticated", 401, err);
    });
};

exports.daftarUser = (req, res) => {
  const { no_mr, tgl_lahir, password, no_telp, email } = req.body;
  if (!no_mr || !tgl_lahir || !password || !no_telp) {
    return error(req, res, {}, "isi Parameter", 400);
  }
  return models.pasien
    .findOne({
      where: {
        ps_mrn: {
          [Op.eq]: sequelize.literal(`mrn_decoded('${no_mr}')`),
        },
      },
    })
    .then((pasien) => {
      if (!pasien) {
        throw new Error(
          `Pasien ${no_mr} tidak ditemukan, mohon buat MR Terlebih dulu`
        );
      }
      return pasien;
    })
    .then((pasien) => {
      return models.asp_pasien.findOne({
        where: {
          ps_id: pasien.ps_id,
          ps_tgllahir: tgl_lahir,
        },
      });
    })
    .then((pasien) => {
      if (!pasien) {
        throw new Error(
          `Tanggal lahir anda ${tgl_lahir} tidak sesuai, mohon datang langsung ke RS`
        );
      }
      return pasien;
    })
    .then((pasien) => {
      return models.user_mobile
        .findOne({
          where: {
            mr: no_mr,
          },
        })
        .then((exist) => {
          if (exist) {
            throw new Error("Pasien sudah terdaftar");
          }
          return pasien;
        });
    })
    .then((pasien) => {
      return models.user_mobile.create({
        nama: pasien.ps_namalengkap,
        mr: no_mr,
        tgl_lahir: tgl_lahir,
        no_telp: no_telp,
        email: email,
        password: md5(password),
      });
    })
    .then((pasien) => {
      if (pasien) {
        return success(req, res, {}, "Pasien berhasil terdaftar.");
      }
      return error(req, res, {}, "Gagal mendaftar", 400);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal mendaftar", 500, err);
    });
};

exports.sendWA = (telp, text) => {
  if (telp) {
    let regXone = /\D/g;
    let regXtwo = /^0/g;
    telp = telp.replace(regXone, "");
    telp = telp.replace(regXtwo, "62");
    const url = "http://onesender.rsudc.net/api/v1/messages";
    return axios.post(
      url,
      {
        recipient_type: "individual",
        to: telp,
        type: "text",
        text: {
          body: text,
        },
      },
      {
        headers: {
          Authorization: process.env.WA_DEVICE_KEY,
        },
      }
    );
    // return axios.post(
    //   "http://chatfire.rsudc.net/api/messages/send-text",
    //   {
    //     to: telp,
    //     message: text,
    //     reply_for: 0,
    //   },
    //   {
    //     // params: {
    //     //   to: payload.no_telp,
    //     //   type: "image",
    //     //   media_url: "https://google.com",
    //     //   message: "test",
    //     // },
    //     headers: {
    //       "device-key": process.env.WA_DEVICE_KEY,
    //     },
    //   }
    // );
  } else {
    const myPromise = new Promise((resolve, reject) => {
      resolve("");
    });
    return myPromise;
  }
};

exports.updateUser = (req, res) => {
  const { password, old_password, email, no_telp } = req.body;
  const { id_user } = req.user;
  // if (!password) {
  //   return error(req, res, {}, "isi Password", 400);
  // }
  return models.user_mobile
    .findOne({
      where: {
        id_user: id_user,
        // password: old_password ? md5(old_password) : md5(password),
      },
    })
    .then((exist) => {
      if (!exist) {
        throw new Error("Password Salah");
      }
      if (old_password) {
        return models.user_mobile.update(
          {
            password: md5(password),
          },
          {
            where: {
              id_user: id_user,
            },
          }
        );
      } else {
        return models.user_mobile.update(
          {
            email: email,
            no_telp: no_telp,
          },
          {
            where: {
              id_user: id_user,
            },
          }
        );
      }
    })
    .then((pasien) => {
      return models.user_mobile.findOne({
        where: {
          id_user,
        },
      });
    })
    .then((payload) => {
      let authToken = signAuthJwt({
        id_user: req.user.id_user,
        mr: req.user.mr,
        nama: req.user.nama,
        tgl_lahir: req.user.tgl_lahir,
        no_telp: payload.no_telp,
        email: payload.email,
      });
      let refreshToken = signRefreshJwt({
        id_user: req.user.id_user,
        mr: req.user.mr,
        nama: req.user.nama,
        tgl_lahir: req.user.tgl_lahir,
        no_telp: payload.no_telp,
        email: payload.email,
      });
      return success(
        req,
        res,

        {
          authToken: authToken,
          refreshToken: refreshToken,
          data_pasien: {
            id_user: req.user.id_user,
            mr: req.user.mr,
            nama: req.user.nama,
            tgl_lahir: req.user.tgl_lahir,
            no_telp: payload.no_telp,
            email: payload.email,
          },
        },
        "Pasien berhasil terupdate."
      );
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal mendaftar", 500, err);
    });
};
exports.forgetPasswordRequest = (req, res) => {
  const { no_telp, email, no_mr } = req.body;
  _getUser(no_telp, email, no_mr)
    .then((payload) => {
      if (!payload) {
        throw new Error("Pasien tidak ditemukan");
      }
      return payload;
    })
    .then((payload) => {
      let token = signForgetJwtPwd({
        id_user: payload.id_user,
        mr: payload.mr,
        nama: payload.nama,
        tgl_lahir: payload.tgl_lahir,
        no_telp: maskString(payload.no_telp, 7, "*"),
        email: maskEmail(payload.email),
      });
      let link = `${process.env.SERVER_DOMAIN}/reset-password?token=${token}`;
      Promise.all([
        this.sendWA(
          payload.no_telp,
          "Mohon buka link dibawah untuk reset password RSUDC Mobile"
        ),
        this.sendWA(payload.no_telp, link),
      ])
        .then(() => {
          if (payload.email) {
            return customMailer(payload.email, payload.nama, link);
          }
        })
        .then(() => {
          return {
            token: token,
            nama: payload.nama,
            no_telp: maskString(payload.no_telp, 7, "*"),
            email: maskEmail(payload.email),
          };
        });
    })
    .then((payload) => {
      return success(req, res, payload, "Token berhasil diberikan");
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal reset", 500, err);
    });
};

exports.forgetPasswordValidate = (req, res) => {
  let token = req.header("x-forget-token");
  if (!token) {
    return error(req, res, {}, "Not Authenticated", 401, {});
  }
  const verify = verifyForgetJwtPwd(token);
  if (verify.error) {
    if (verify.error.name === "JsonWebTokenError") {
      return error(req, res, {}, "Not Authenticated", 401, {});
    } else if (verify.error.name == "TokenExpiredError") {
      return error(req, res, {}, "Token Expired!.", 410, {});
    } else {
      return error(req, res, {}, "Not Authenticated", 400, {});
    }
  }
  return success(req, res, verify, "Token berhasil diberikan");
};

exports.forgetPasswordChange = (req, res) => {
  let token = req.header("x-forget-token");
  const { password } = req.body;

  if (!token) {
    return error(req, res, {}, "Not Authenticated", 401, {});
  }
  const verify = verifyForgetJwtPwd(token);
  if (verify.error) {
    if (verify.error.name === "JsonWebTokenError") {
      return error(req, res, {}, "Not Authenticated", 401, {});
    } else if (verify.error.name == "TokenExpiredError") {
      return error(req, res, {}, "Token Expired!.", 410, {});
    } else {
      return error(req, res, {}, "Not Authenticated", 400, {});
    }
  }

  return models.user_mobile
    .findOne({
      where: {
        id_user: verify.id_user,
      },
    })
    .then((exist) => {
      if (!exist) {
        throw new Error("Pasien tidak ditemukan");
      }
      return models.user_mobile.update(
        {
          password: md5(password),
        },
        {
          where: {
            id_user: verify.id_user,
          },
        }
      );
    })
    .then((pasien) => {
      if (pasien) {
        return success(req, res, {}, "Pasien berhasil diupdate.");
      }
      return error(req, res, {}, "Gagal mendaftar", 400);
    })
    .catch((err) => {
      return error(req, res, {}, "Gagal mendaftar", 500, err);
    });
};


// IGD

exports.getTokenIGD = (req, res) => {
  let { username, password } = req.body;
  const getUser = () => {
    const query = `SELECT * from pegawai where peg_aktif is true and peg_username = :uname and peg_passwd = CRYPT(:password,peg_passwd)`;
    // return models.pegawai.findOne({
    //   where: {
    //     peg_username: username,
    //   },
    // });
    return models.sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: {
        uname: username,
        password: password,
      },
    });
  };

  const promise = new Promise((resolve, reject) => {
    resolve(getUser());
  });

  promise
    .then((payload) => {
      if (payload.length < 1) {
        //throw new Error("User Tidak Ditemukan");
         return error(req, res, {}, "User Tidak Ditemukan", 401);
      }
      let authToken = signAuthIgdJwt({
        peg_id: payload[0].peg_id,
        peg_nama: payload[0].peg_nama,
      });
      let refreshToken = signRefreshIgdJwt({
        peg_id: payload[0].peg_id,
        peg_nama: payload[0].peg_nama,
      });
      return models.user_mobile_child
        .create({
          user_mobile_token: refreshToken,
          peg_id: payload[0].peg_id,
        })
        .then(() => {
          return {
            authToken: authToken,
            refreshToken: refreshToken,
            data_pegawai: {
              peg_id: payload[0].peg_id,
              peg_nama: payload[0].peg_nama,
            },
          };
        });
    })
    .then((payload) => {
      return success(req, res, payload, "User termuat", 200);
    })
    .catch((err) => {
      return error(
        req,
        res,
        {},
        "Gagal memuat",
        err.message === "User Tidak Ditemukan" ? 401 : 500,
        err
      );
    });
};

exports.getUserIGD = (req, res) => {
  //let { peg_id, peg_nama } = req.user;

  //console.log(peg_id);
  
  return success(req, res, req.user, "User termuat", 200);
};



// END IGD
