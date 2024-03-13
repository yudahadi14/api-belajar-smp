var DataTypes = require("sequelize").DataTypes;
var _aspnet_Applications = require("./aspnet_Applications");
var _aspnet_Membership = require("./aspnet_Membership");
var _aspnet_Roles = require("./aspnet_Roles");
var _aspnet_SchemaVersions = require("./aspnet_SchemaVersions");
var _aspnet_Users = require("./aspnet_Users");
var _aspnet_UsersInRoles = require("./aspnet_UsersInRoles");
var _belajar_gambar = require("./belajar_gambar");
var _belajar_header = require("./belajar_header");
var _belajar_jawaban = require("./belajar_jawaban");
var _belajar_mreferensi = require("./belajar_mreferensi");
var _belajar_pembahasan = require("./belajar_pembahasan");
var _belajar_pertanyaan = require("./belajar_pertanyaan");
var _daftar_internet_yuda = require("./daftar_internet_yuda");
var _trx_internet_yuda = require("./trx_internet_yuda");
var _user_mobile = require("./user_mobile");
var _user_mobile_log = require("./user_mobile_log");

function initModels(sequelize) {
  var aspnet_Applications = _aspnet_Applications(sequelize, DataTypes);
  var aspnet_Membership = _aspnet_Membership(sequelize, DataTypes);
  var aspnet_Roles = _aspnet_Roles(sequelize, DataTypes);
  var aspnet_SchemaVersions = _aspnet_SchemaVersions(sequelize, DataTypes);
  var aspnet_Users = _aspnet_Users(sequelize, DataTypes);
  var aspnet_UsersInRoles = _aspnet_UsersInRoles(sequelize, DataTypes);
  var belajar_gambar = _belajar_gambar(sequelize, DataTypes);
  var belajar_header = _belajar_header(sequelize, DataTypes);
  var belajar_jawaban = _belajar_jawaban(sequelize, DataTypes);
  var belajar_mreferensi = _belajar_mreferensi(sequelize, DataTypes);
  var belajar_pembahasan = _belajar_pembahasan(sequelize, DataTypes);
  var belajar_pertanyaan = _belajar_pertanyaan(sequelize, DataTypes);
  var daftar_internet_yuda = _daftar_internet_yuda(sequelize, DataTypes);
  var trx_internet_yuda = _trx_internet_yuda(sequelize, DataTypes);
  var user_mobile = _user_mobile(sequelize, DataTypes);
  var user_mobile_log = _user_mobile_log(sequelize, DataTypes);

  aspnet_Roles.belongsToMany(aspnet_Users, { as: 'UserId_aspnet_Users', through: aspnet_UsersInRoles, foreignKey: "RoleId", otherKey: "UserId" });
  aspnet_Users.belongsToMany(aspnet_Roles, { as: 'RoleId_aspnet_Roles', through: aspnet_UsersInRoles, foreignKey: "UserId", otherKey: "RoleId" });
  aspnet_Membership.belongsTo(aspnet_Applications, { as: "Application", foreignKey: "ApplicationId"});
  aspnet_Applications.hasMany(aspnet_Membership, { as: "aspnet_Memberships", foreignKey: "ApplicationId"});
  aspnet_Roles.belongsTo(aspnet_Applications, { as: "Application", foreignKey: "ApplicationId"});
  aspnet_Applications.hasMany(aspnet_Roles, { as: "aspnet_Roles", foreignKey: "ApplicationId"});
  aspnet_Users.belongsTo(aspnet_Applications, { as: "Application", foreignKey: "ApplicationId"});
  aspnet_Applications.hasMany(aspnet_Users, { as: "aspnet_Users", foreignKey: "ApplicationId"});
  aspnet_UsersInRoles.belongsTo(aspnet_Roles, { as: "Role", foreignKey: "RoleId"});
  aspnet_Roles.hasMany(aspnet_UsersInRoles, { as: "aspnet_UsersInRoles", foreignKey: "RoleId"});
  aspnet_Membership.belongsTo(aspnet_Users, { as: "User", foreignKey: "UserId"});
  aspnet_Users.hasOne(aspnet_Membership, { as: "aspnet_Membership", foreignKey: "UserId"});
  aspnet_UsersInRoles.belongsTo(aspnet_Users, { as: "User", foreignKey: "UserId"});
  aspnet_Users.hasMany(aspnet_UsersInRoles, { as: "aspnet_UsersInRoles", foreignKey: "UserId"});
  belajar_pertanyaan.belongsTo(belajar_gambar, { as: "lineidgambar_belajar_gambar", foreignKey: "lineidgambar"});
  belajar_gambar.hasMany(belajar_pertanyaan, { as: "belajar_pertanyaans", foreignKey: "lineidgambar"});
  belajar_gambar.belongsTo(belajar_header, { as: "lineidheader_belajar_header", foreignKey: "lineidheader"});
  belajar_header.hasMany(belajar_gambar, { as: "belajar_gambars", foreignKey: "lineidheader"});
  belajar_pembahasan.belongsTo(belajar_jawaban, { as: "lineidjawaban_belajar_jawaban", foreignKey: "lineidjawaban"});
  belajar_jawaban.hasMany(belajar_pembahasan, { as: "belajar_pembahasans", foreignKey: "lineidjawaban"});
  belajar_jawaban.belongsTo(belajar_pertanyaan, { as: "lineidpertanyaan_belajar_pertanyaan", foreignKey: "lineidpertanyaan"});
  belajar_pertanyaan.hasMany(belajar_jawaban, { as: "belajar_jawabans", foreignKey: "lineidpertanyaan"});
  trx_internet_yuda.belongsTo(daftar_internet_yuda, { as: "lineid2_daftar_internet_yuda", foreignKey: "lineid2"});
  daftar_internet_yuda.hasMany(trx_internet_yuda, { as: "trx_internet_yudas", foreignKey: "lineid2"});

  return {
    aspnet_Applications,
    aspnet_Membership,
    aspnet_Roles,
    aspnet_SchemaVersions,
    aspnet_Users,
    aspnet_UsersInRoles,
    belajar_gambar,
    belajar_header,
    belajar_jawaban,
    belajar_mreferensi,
    belajar_pembahasan,
    belajar_pertanyaan,
    daftar_internet_yuda,
    trx_internet_yuda,
    user_mobile,
    user_mobile_log,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
