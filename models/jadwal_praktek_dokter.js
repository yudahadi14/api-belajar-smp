const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const JadwalPraktek = sequelize.define(
    "jadwal_praktek_dokter",
    {
      id_dokter: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      hari_praktek: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      id_poli: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      jam_praktek_lainnya: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      jam_praktek_mulai: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      jam_praktek_akhir: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      periodeawal: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      periodeakhir: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      thn: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tgl_input: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      blnint1: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      blnint2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      aktif: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      hari_angka: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quota_dr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quotaumum_dr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "jadwal_praktek_dokter",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "jadwal_praktek_dokter_id_dokter_id_poli_hari_praktek",
          fields: [
            { name: "id_dokter" },
            { name: "id_poli" },
            { name: "hari_praktek" },
          ],
        },
      ],
    }
  );

  JadwalPraktek.associate = function (models) {
    // associations can be defined here
    JadwalPraktek.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "id_dokter",
      as: "pegawai",
    });
    JadwalPraktek.hasOne(models.dokter_bpjs, {
      foreignKey: "dr_bpjs_id_peg",
      sourceKey: "id_dokter",
      as: "dokter_bpjs",
    });
    JadwalPraktek.hasOne(models.refpoli_bpjs, {
      foreignKey: "kd_layananpoli_rsc",
      sourceKey: "id_poli",
      as: "poli_bpjs",
    });
  };
  return JadwalPraktek;
};
