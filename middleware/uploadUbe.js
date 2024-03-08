var fs = require("fs");
var path = require("path");
const base64ToFile = require("../helpers/utility/base64ToFile");
const { error } = require("../helpers/utility/response");
const uploadUbe = (req, res, next) => {
  let body = req.body;
  let promiseArr = [];
  let bodyArr = [];
  body.map((item) => {
    let { file_photo, tipe_berkas, kun_id, tipe_berkas_id, input_type } = item;
    let fileName = "/ube/" + kun_id + "_" + tipe_berkas_id + "_" + Date.now();
    if (input_type === "image") {
      promiseArr.push(
        base64ToFile(file_photo, fileName).then((ext) => {
          bodyArr.push({
            kun_id: kun_id,
            tipe_berkas_id: tipe_berkas_id,
            si_ube_filename: fileName + "." + ext,
          });
          return 1;
        })
      );
    } else {
      bodyArr.push({
        kun_id: kun_id,
        tipe_berkas_id: tipe_berkas_id,
        si_ube_filename: file_photo,
      });
    }
    return;
  });
  Promise.all(promiseArr)
    .then(() => {
      req.body = bodyArr;
      return next();
    })
    //   return base64ToFile(filePhoto, "/ube/" + fileName)
    //     .then((ext) => {
    //       req.fileName = fileName + ext;
    //       return next();
    //     })
    .catch((err) => {
      return error(
        req,
        res,
        {},
        "Gagal Upload Foto, coba ulang kembali.",
        undefined,
        err
      );
    });
};

module.exports = uploadUbe;
