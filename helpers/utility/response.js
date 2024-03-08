let log4js = require("log4js");
let moment = require("moment");
let loggerConsole = log4js.getLogger("log");

exports.logging = (msg) => {
  log4js.configure({
    appenders: {
      app: {
        type: "file",
        filename: `log/${moment().format("YYYY_MM_DD")}.log`,
      },
      log: {
        type: "console",
      },
    },
    categories: {
      default: { appenders: ["app", "log"], level: "error" },
      log: {
        appenders: ["log"],
        level: "all",
      },
    },
  });
  let logger = log4js.getLogger("app");
  logger.fatal(msg);
};

exports.success = (
  req,
  res,
  data = null,
  message = "Berhasil",
  status = 200
) => {
  loggerConsole.info(message);
  return res.json({
    status: status,
    message: message,
    data: data,
  });
};
exports.error = (
  req,
  res,
  data = null,
  message = "Ada Kesalahan",
  status = 400,
  err
) => {
  // console.log(err);
  if (err) {
    // logging(err.toString());
    this.logging(err);
  }
  if (err && err.response) {
    // logger.fatal(err.response);
    message = err.response.message;
    status = status ? status : 400;
  } else {
    if (err && err.message) {
      message = err.message;
      status = 400;
    }
  }
  return res.status(status).json({
    status: status,
    message: `${message}, contact us: support@rsudcengkareng.com`,
    data: data,
  });
};
