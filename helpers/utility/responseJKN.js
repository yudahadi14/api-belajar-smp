let log4js = require("log4js");
let moment = require("moment");

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
let loggerConsole = log4js.getLogger("log");

exports.successJKN = (
  req,
  res,
  data = null,
  message = "Berhasil",
  status = 200
) => {
  loggerConsole.info(message);
  return res.status(status).json({
    metaData: {
      code: status,
      message: message,
    },
    data: data,
  });
};

exports.errorJKN = (
  req,
  res,
  data = null,
  message = "Ada Kesalahan",
  status = 400,
  err
) => {
  if (err) {
    if (err.response) {
      logger.warn(err.response);
    } else if (err.message) {
      logger.fatal(err.message);
    }
  } 
  return res.status(status).json({
    metaData: {
      code: status,
      message: message,
    },
    data: data,
  });
};
