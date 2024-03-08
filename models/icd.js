const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let icd = sequelize.define(
    "icd",
    {
      icd_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      icd_id_kunjungan: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      icd_code: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      icd_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      icd_id_dokter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      icd_catatan: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      icd_id_peg: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      icd_sekunder: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      icd_catatan_anamnesa: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icd_catatan_pemeriksaan_fisik: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icd_catatan_mr: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icd_catatan_mr_id_peg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      icd_catatan_mr_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ihs_condition_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "icd",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "icd_icd_id_kunjungan",
          fields: [{ name: "icd_id_kunjungan" }],
        },
        {
          name: "icd_icd_sekunder",
          fields: [{ name: "icd_sekunder" }],
        },
        {
          name: "icd_icd_sekunder_3",
          fields: [{ name: "icd_id_kunjungan" }, { name: "icd_sekunder" }],
        },
        {
          name: "icd_icd_sekunder_false",
          fields: [{ name: "icd_sekunder" }],
        },
        {
          name: "icd_icd_sekunder_true",
          fields: [{ name: "icd_sekunder" }],
        },
        {
          name: "icd_icd_tgl",
          fields: [{ name: "icd_tgl" }],
        },
        {
          name: "icd_pkey",
          unique: true,
          fields: [{ name: "icd_id" }],
        },
      ],
    }
  );
  icd.associate = function (models) {
    // associations can be defined here
    icd.hasOne(models.ref_icd10, {
      foreignKey: "ref_icd10_kode",
      sourceKey: "icd_code",
      as: "icd_ten",
    });
    icd.hasOne(models.kunjungan, {
      foreignKey: "kun_id",
      sourceKey: "icd_id_kunjungan",
      as: "kunjungan",
    });
  };

  return icd;
};
