var fs = require("fs");
var path = require("path");
const base64ToFile = require("../helpers/utility/base64ToFile");
const { error } = require("../helpers/utility/response");
const uploadID = (req, res, next) => {
  let { filePhoto, jenisIdnomor, foto, nik } = req.body;
  let fileName = nik ? nik : jenisIdnomor + "_" + Date.now();
  // let fileName = jenisIdnomor;
  if (foto) {
    filePhoto = `data:image/png;base64,${foto}`;
  }
  return base64ToFile(filePhoto, "/identitas/" + fileName)
    .then((ext) => {
      req.fileName = "identitas/" + fileName + "." + ext;
      return next();
    })
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

module.exports = uploadID;
