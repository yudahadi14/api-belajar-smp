const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const IHS = sequelize.define(
    "lab_ihs",
    {
      lab_ihs_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      lab_ihs_id_prod: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      lab_ihs_specimen: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lab_ihs_specimen_kode: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lab_ihs_hasil: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      lab_ihs_metode: {
        type: DataTypes.STRING(255),
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
      lab_ihs_golongan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "lab_ihs",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "lab_ihs_pk",
          unique: true,
          fields: [{ name: "lab_ihs_id" }],
        },
      ],
    }
  );
  IHS.associate = function (models) {
    // associations can be defined here

    IHS.hasMany(models.lab_hasil_ihs, {
      foreignKey: "lab_hsl_ihs_id_prod",
      sourceKey: "lab_ihs_id_prod",
      as: "lab_hasil_ihs",
    });
  };
  return IHS;
};
