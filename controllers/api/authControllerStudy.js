const { error, success } = require("../../helpers/utility/response");
const models = require("../../modelsmengajar");
const md5 = require("md5");
const {
    signRefreshStudyJwt,
    signAuthStudyJwt,
  } = require("../../helpers/utility/jwt");

exports.getTokenMobile = (req, res) => {
    let { notelp, pin } = req.body;
    const getUser = () => {
    //   const query = `SELECT * from user`;
      return models.user_mobile.findOne({
        where: {
          user_notlp: username,
          user_pin: pin
        },
      });
    //   return models.sequelize.query(query, {
    //     type: QueryTypes.SELECT,
    //     replacements: {
    //       uname: username,
    //       password: password,
    //     },
    //   });
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
        let authToken = signAuthStudyJwt({
          user_id: payload[0].user_id,
          user_nama: payload[0].user_nama,
          user_notlp: payload[0].user_notlp,
          user_email: payload[0].user_email,
        });
        let refreshToken = signRefreshStudyJwt({
            user_id: payload[0].user_id,
            user_nama: payload[0].user_nama,
            user_notlp: payload[0].user_notlp,
            user_email: payload[0].user_email,
        });
        return models.user_mobile_log
          .create({
            user_token: refreshToken,
            fk_user_id: payload[0].user_id,
          })
          .then(() => {
            return {
              authToken: authToken,
              refreshToken: refreshToken,
              data_pegawai: {
                user_id: payload[0].user_id,
                user_nama: payload[0].user_nama,
                user_notlp: payload[0].user_notlp,
                user_email: payload[0].user_email,
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
  
  exports.getUserMobile = (req, res) => {
    //let { peg_id, peg_nama } = req.user;
  
    //console.log(peg_id);
    
    return success(req, res, req.user, "User termuat", 200);
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

  exports.daftarUser  = (req, res) => { 
    let { firebasetoken, notelp, nama, pin } = req.body;

    console.log(notelp);


    return models.user_mobile
      .findOne({
        where: {
          user_notlp: notelp,
        },
      })
      .then((granted) => {
        if (!granted) {

          return models.user_mobile.create({
            user_notlp: notelp,
            user_nama: nama,
            user_pin: pin
          }).then((data) => {

            console.log(data.dataValues.user_id);
            console.log(data.length);

            if(data)
            {
              let userid = data.dataValues.user_id;
              let authToken = signAuthStudyJwt({
                id_user: userid,
                user_notlp: notelp,
                user_nama: nama,
                user_pin: pin,
                firebasetoken: firebasetoken
              });

              let refreshToken = signRefreshStudyJwt({
                id_user: userid,
                user_notlp: notelp,
                user_nama: nama,
                user_pin: pin,
                firebasetoken: firebasetoken
              });

              return models.user_mobile_log.create({
                fk_user_id: userid,
                firebasetoken: firebasetoken,
                user_pin: pin,
                user_token: refreshToken
              }).then((data) => {
    
                return success(
                  req,
                  res,
                  {
                    authToken: authToken,
                    refreshToken: refreshToken,
                    data_user: {
                      id_user: userid,
                      user_notlp: notelp,
                      user_nama: nama,
                      user_pin: pin,
                      firebasetoken: firebasetoken
                    },
                  },
                  "User termuat",
                  200
                );
    
              })
              .catch((err) => {
                return error(req, res, {}, "Not Authenticated", 401, err);
              });
            }

            // return success(
            //   req,
            //   res,
            //   signAuthJwt({
            //     peg_id: verified.peg_id,
            //     peg_nama: verified.peg_nama,
            //   }),
            //   "Token diberikan."
            // );

          })
          .catch((err) => {
            return error(req, res, {}, "Not Authenticated", 401, err);
          });

        }else{
              let userid = granted[0].user_id;
              let authToken = signAuthJwt({
                id_user: userid,
                user_notlp: notelp,
                user_nama: nama,
                user_pin: pin,
                firebasetoken: firebasetoken
              });

              let refreshToken = signRefreshJwt({
                id_user: userid,
                user_notlp: notelp,
                user_nama: nama,
                user_pin: pin,
                firebasetoken: firebasetoken
              });

              return success(
                req,
                res,
                {
                  authToken: authToken,
                  refreshToken: refreshToken,
                  data_user: {
                    id_user: userid,
                    user_notlp: notelp,
                    user_nama: nama,
                    user_pin: pin,
                    firebasetoken: firebasetoken
                  },
                },
                "User termuat",
                200
              );
        }
        
      })
      .catch((err) => {
        return error(req, res, {}, "Not Authenticated", 401, err);
      });



  }