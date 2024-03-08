const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const inap = sequelize.define(
    "inap",
    {
      inap_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      inap_id_kunjungan: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: "inap_inap_id_kunjungan_key",
      },
      inap_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inap_tempat_tidur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inap_waktu: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      inap_id_inap_sebelumnya: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: "inap_inap_id_kunjungan_key",
      },
      inap_waktu_keluar: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      inap_pulang: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inap_tempat_tidur_acuan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inap_status_pasien: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      inap_keadaan_pulang: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inap_ingin_sendiri: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      inap_tutup_tindakan_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      inap_tutup_tindakan_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      inap_tutup_tindakan_staff: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inap_tutup_farmasi_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      inap_tutup_farmasi_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      inap_tutup_farmasi_staff: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inap_tutup_tindakan_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      inap_tutup_farmasi_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      inap_waktu_bayar: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      inap_peg_updt_kamar: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "inap",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "inap_inap_id_inap_waktu_keluar",
          fields: [{ name: "inap_waktu_keluar" }, { name: "inap_id" }],
        },
        {
          name: "inap_inap_id_kunjungan_inap_pulang",
          fields: [{ name: "inap_id_kunjungan" }, { name: "inap_pulang" }],
        },
        {
          name: "inap_inap_id_kunjungan_key",
          unique: true,
          fields: [
            { name: "inap_id_kunjungan" },
            { name: "inap_id_inap_sebelumnya" },
          ],
        },
        {
          name: "inap_inap_id_kunjungan_key2",
          fields: [{ name: "inap_id_kunjungan" }],
        },
        {
          name: "inap_inap_pulang",
          fields: [{ name: "inap_pulang" }],
        },
        {
          name: "inap_inap_pulang_notnull",
          fields: [{ name: "inap_pulang" }],
        },
        {
          name: "inap_inap_pulang_null",
          fields: [{ name: "inap_pulang" }],
        },
        {
          name: "inap_inap_tempat_tidur",
          fields: [{ name: "inap_tempat_tidur" }],
        },
        {
          name: "inap_inap_waktu_keluar",
          fields: [{ name: "inap_waktu_keluar" }],
        },
        {
          name: "inap_inap_waktu_keluar_inap_pulang",
          fields: [{ name: "inap_waktu_keluar" }, { name: "inap_pulang" }],
        },
        {
          name: "inap_inap_waktu_keluar_null",
          fields: [{ name: "inap_waktu_keluar" }],
        },
        {
          name: "inap_pkey",
          unique: true,
          fields: [{ name: "inap_id" }],
        },
      ],
    }
  );
  inap.associate = function (models) {
    inap.hasOne(models.kunjungan, {
      foreignKey: "kun_id",
      sourceKey: "inap_id_kunjungan",
      as: "kunjungan",
    });
  };
  return inap;
};
