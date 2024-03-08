let log4js = require("log4js");
let moment = require("moment");
let loggerConsole = log4js.getLogger("log");

exports.globalLogger = (msg) => {
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
