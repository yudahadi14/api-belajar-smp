const customSFTP = require("../helpers/utility/customSFTP");
const { error } = require("../helpers/utility/response");
const uploadIDRemote = (req, res, next) => {
  let { filePhoto, foto } = req.body;
  if (foto) {
    filePhoto = `data:image/png;base64,${foto}`;
  }
  let remote = "/opt/lampp/htdocs/daftar/gambar/" + req.fileName;
  //   let fileName = jenisIdnomor + "_" + Date.now();
  // let fileName = jenisIdnomor;
  let dataArr = filePhoto.split(",");
  let base64Content = dataArr[1];
  //   let base64Content = data.replace(
  //     /^data:image\/(png||jpg||jpeg||svg||heic);base64,/gi,
  //     ""
  //   );
  //   let mime = dataArr[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0];
  //   let fileType = mime.split("/")[1];

  let byteFile = Buffer.from(base64Content, "base64");
  return customSFTP(byteFile, remote)
    .then(() => {
      return next();
    })
    .catch((err) => {
      console.log(err);
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

module.exports = uploadIDRemote;
