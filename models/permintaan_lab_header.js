const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Permintaan =  sequelize.define('permintaan_lab_header', {
    mintalab_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mintalab_id_rkun: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    mintalab_tgl_rencana: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mintalab_id_dokter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mintalab_id_pasien: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mintalab_no_lab: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    mintalab_id_pemeriksa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintalab_nama_dokter_rujuk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mintalab_id_inap: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    mintalab_tgl_jawab: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mintalab_tgl_ambilsample: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mintalab_tgl_bacasample: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mintalab_psluar_nama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mintalab_psluar_tgllahir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mintalab_psluar_alamt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mintalab_psluar_umur: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mintalab_ambilhasil_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mintalab_ambilhasil_nama: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mintalab_validasi_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mintalab_validasi_peg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintalab_validasi: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mintalab_klinik_dokter_rujuk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mintalab_psluar_jk: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    mintalab_ambilhasil_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mintalab_ambilhasil_notelp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mintalab_time_rencana: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mintalab_time_jawab: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mintalab_nama_analis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mintalab_waktu_input: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    mintalab_nomor_input_waktu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mintalab_no_urut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintalab_cito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintalab_id_soap_ugd: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'permintaan_lab_header',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "permintaan_lab_header_mintalab_ambilhasil_nama",
        fields: [
          { name: "mintalab_ambilhasil_nama" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_ambilhasil_notelp",
        fields: [
          { name: "mintalab_ambilhasil_notelp" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_ambilhasil_tgl",
        fields: [
          { name: "mintalab_ambilhasil_tgl" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_ambilhasil_time",
        fields: [
          { name: "mintalab_ambilhasil_time" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id",
        fields: [
          { name: "mintalab_id" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id_dokter",
        fields: [
          { name: "mintalab_id_dokter" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id_inap",
        fields: [
          { name: "mintalab_id_inap" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id_pasien",
        fields: [
          { name: "mintalab_id_pasien" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id_pemeriksa",
        fields: [
          { name: "mintalab_id_pemeriksa" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_id_rkun",
        fields: [
          { name: "mintalab_id_rkun" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_klinik_dokter_rujuk",
        fields: [
          { name: "mintalab_klinik_dokter_rujuk" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_nama_analis",
        fields: [
          { name: "mintalab_nama_analis" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_nama_dokter_rujuk",
        fields: [
          { name: "mintalab_nama_dokter_rujuk" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_no_lab",
        fields: [
          { name: "mintalab_no_lab" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_nomor_input_waktu",
        fields: [
          { name: "mintalab_nomor_input_waktu" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_psluar_alamt",
        fields: [
          { name: "mintalab_psluar_alamt" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_psluar_jk",
        fields: [
          { name: "mintalab_psluar_jk" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_psluar_nama",
        fields: [
          { name: "mintalab_psluar_nama" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_psluar_tgllahir",
        fields: [
          { name: "mintalab_psluar_tgllahir" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_psluar_umur",
        fields: [
          { name: "mintalab_psluar_umur" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_tgl_ambilsample",
        fields: [
          { name: "mintalab_tgl_ambilsample" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_tgl_bacasample",
        fields: [
          { name: "mintalab_tgl_bacasample" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_tgl_jawab",
        fields: [
          { name: "mintalab_tgl_jawab" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_tgl_rencana",
        fields: [
          { name: "mintalab_tgl_rencana" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_time_jawab",
        fields: [
          { name: "mintalab_time_jawab" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_time_rencana",
        fields: [
          { name: "mintalab_time_rencana" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_validasi",
        fields: [
          { name: "mintalab_validasi" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_validasi_peg",
        fields: [
          { name: "mintalab_validasi_peg" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_validasi_tgl",
        fields: [
          { name: "mintalab_validasi_tgl" },
        ]
      },
      {
        name: "permintaan_lab_header_mintalab_waktu_input",
        fields: [
          { name: "mintalab_waktu_input" },
        ]
      },
      {
        name: "permintaan_lab_header_pkey",
        unique: true,
        fields: [
          { name: "mintalab_id" },
        ]
      },
    ]
  });
  Permintaan.associate = function (models) {
    // associations can be defined here
    
    Permintaan.hasOne(models.ihs_encounter, {
      foreignKey: "rkun_id",
      sourceKey: "mintalab_id_rkun",
      as: "ihs_encounter",
    });
    Permintaan.hasMany(models.permintaan_lab_detail, {
      foreignKey: "mintalab_dt_id_header",
      sourceKey: "mintalab_id",
      as: "permintaan_detail",
    });
  };

  return Permintaan;
};
