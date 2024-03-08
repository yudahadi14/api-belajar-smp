const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "hepi_c_pasien",
    {
      hepi_c_ps_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      hepi_c_ps_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_mrn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nik: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      asal_poli: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jk: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tgl_lahir_dd: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tgl_lahir_mm: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tgl_lahir_yyyy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status_nikah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pendidikan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pekerjaan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat_prov: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat_kota: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      no_hp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_mrn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "hepi_c_pasien",
      schema: "public",
      timestamps: false,
    }
  );
};
