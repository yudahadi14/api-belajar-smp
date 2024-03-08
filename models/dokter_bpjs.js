const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const dokterBPJS = sequelize.define(
    "dokter_bpjs",
    {
      dr_bpjs_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      dr_bpjs_kode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dr_bpjs_nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dr_bpjs_kode_spec: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dr_bpjs_id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dr_bpjs_id_peg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "dokter_bpjs",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "dokter_bpjs_pkey",
          unique: true,
          fields: [{ name: "dr_bpjs_id" }],
        },
      ],
    }
  );
  dokterBPJS.associate = function (models) {
    // associations can be defined here
    dokterBPJS.hasOne(models.foto_dokter, {
      foreignKey: "peg_id",
      sourceKey: "dr_bpjs_id_peg",
      as: "foto_dokter",
    });
    dokterBPJS.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "dr_bpjs_id_layanan",
      as: "layanan",
    });
    dokterBPJS.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "dr_bpjs_id_peg",
      as: "pegawai",
    });
  };

  return dokterBPJS;
};
