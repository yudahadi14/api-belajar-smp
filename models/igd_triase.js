const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('igd_triase', {
    triase_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    triase_tanggaldatang: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_jeniskasus: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_namapasien: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    triase_jeniskelamin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_usia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_keluhanutama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    triase_keluhanlain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    triase_airway: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_freqnafas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_suaranafas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_hentijantung: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_akral: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_sianosis: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_freqnadi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_stsdisposisi: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_disposisipasien: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_mulaitindakan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_selesaitindakan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_inputwaktu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_isbatal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    triase_isbatal_alasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    triase_isbatal_inputdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_kodeform: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_idkun: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    triase_peg_hubung: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_date_hubung: {
      type: DataTypes.DATE,
      allowNull: true
    },
    triase_kuatnadi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_peg_inputwaktu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    triase_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    triase_emergency: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    triase_regpsonline_id_reg: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_durasitindakan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    triase_psid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    triase_caradatang: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_konfirmspgdt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triase_asalrujukan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    triase_asalrujukan_nomor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    triase_pegid_input: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'igd_triase',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "igd_triase_pkey",
        unique: true,
        fields: [
          { name: "triase_id" },
        ]
      },
    ]
  });
};
