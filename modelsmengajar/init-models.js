var DataTypes = require("sequelize").DataTypes;
var _belajar_trx_pembelajaran = require("./belajar_trx_pembelajaran");

function initModels(sequelize) {
  var belajar_trx_pembelajaran = _belajar_trx_pembelajaran(sequelize, DataTypes);


  return {
    belajar_trx_pembelajaran,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
