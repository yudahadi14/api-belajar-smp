const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "lab_hasil_ihs",
    {
      lab_hsl_ihs_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      lab_hsl_ihs_id_prod: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      lab_hsl_itm_lab_hsl_dt_ket: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      lab_ihs_kode_loinc: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lab_ihs_kode_snomed: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lab_ihs_hasil: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "lab_hasil_ihs",
      schema: "public",
      timestamps: false,
    }
  );
};
