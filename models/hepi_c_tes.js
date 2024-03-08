const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "hepi_c_tes",
    {
      hepi_c_tes_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      kode_tes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nik: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tanggal_tes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hasil_tes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      c_sgot: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      c_asgot: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      c_trombosit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_mrn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hsl_lab_dt_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      
    },
    {
      sequelize,
      tableName: "hepi_c_tes",
      schema: "public",
      timestamps: false,
    }
  );
};
