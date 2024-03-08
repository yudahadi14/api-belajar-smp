const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "trx_notif_error_mobile",
    {
      notif_error_mobile_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      notif_error_mobile_title: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      notif_error_mobile_subtitle: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "trx_notif_error_mobile",
      schema: "public",
      timestamps: false,
    }
  );
};
