const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asp_penanggung', {
    png_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    png_nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    png_alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    png_telepon: {
      type: DataTypes.STRING,
      allowNull: true
    },
    png_fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    png_email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    png_kodepos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    png_telp_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    png_fax_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    png_npwp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    png_npwp_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    png_contact_legal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    png_contact_keu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    png_contact_lain_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    png_daftar_awal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    png_id_kode_rekening_hutang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    png_id_kode_rekening_piutang: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    png_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "penanggung status aktif atau engga"
    },
    png_urutan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asp_penanggung',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asp_penanggung_pkey",
        unique: true,
        fields: [
          { name: "png_id" },
        ]
      },
      {
        name: "asp_penanggung_png_id_png_nama",
        fields: [
          { name: "png_id" },
          { name: "png_nama" },
        ]
      },
      {
        name: "asp_penanggung_png_nama",
        fields: [
          { name: "png_nama" },
        ]
      },
      {
        name: "asp_penanggung_status",
        fields: [
          { name: "png_status" },
        ]
      },
      {
        name: "asp_penanggung_status_2",
        fields: [
          { name: "png_nama" },
          { name: "png_status" },
        ]
      },
      {
        name: "asp_penanggung_status_3",
        fields: [
          { name: "png_status" },
          { name: "png_nama" },
        ]
      },
      {
        name: "asp_pennanggung_png_status_true_png_nama",
        fields: [
          { name: "png_status" },
          { name: "png_nama" },
        ]
      },
      {
        name: "asp_pennanggung_png_status_true_png_nama_2",
        fields: [
          { name: "png_status" },
          { name: "png_nama" },
        ]
      },
    ]
  });
};
