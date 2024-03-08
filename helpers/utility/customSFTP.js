let Client = require("ssh2-sftp-client");
const fs = require("fs");
const { logger } = require("../../controllers/api/jaksehat/helpers/responser");
let sftp = new Client();
// let data = fs.createReadStream(
//   `${path.join(__dirname)}/public/doctors/error.png`
// );
// let remote = "/opt/lampp/htdocs/daftar/gambar/error.png";

const customSFTP = (file, remote) => {
  return sftp
    .connect({
      host: process.env.HOST_SMTP_TEDDY,
      port: 22,
      username: process.env.UNAME_SMTP_TEDDY,
      password: process.env.PASS_SMTP_TEDDY,
    })
    .then(() => {
      return sftp.put(file, remote);
    })
    .then(() => {
      return sftp.end();
    })
    .catch((err) => {
      console.log(err);
      // logger.fatal(err.toString());
      return err;
    });
};

module.exports = customSFTP;
