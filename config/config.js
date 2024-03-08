const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    username: process.env.DEV_DB_USER_SIM,
    password: process.env.DEV_DB_PASS_SIM,
    database: process.env.DEV_DB_NAME_SIM,
    host: process.env.DEV_DB_HOST_SIM,
    dialect: process.env.DEV_DB_DIALECT_SIM,
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_DB_USER_SIM,
    password: process.env.PROD_DB_PASS_SIM,
    database: process.env.PROD_DB_NAME_SIM,
    host: process.env.PROD_DB_HOST_SIM,
    dialect: process.env.PROD_DB_DIALECT_SIM,
    logging: false,
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: "+07:00",
  },
};
