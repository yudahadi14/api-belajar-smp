const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formtriase', {
    formtriaseid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "TRIAL",
      primaryKey: true
    },
    tanggaldatang: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "TRIAL"
    },
    mulaitindakan: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "TRIAL"
    },
    namapasien: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "TRIAL"
    },
    jeniskelamin: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "TRIAL"
    },
    usia: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "TRIAL"
    },
    asalpasien: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "TRIAL"
    },
    asalrujukan: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "TRIAL"
    },
    asalrujukanket: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "TRIAL"
    },
    konfirmasispgdt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "TRIAL"
    },
    nosuratrujukan: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "TRIAL"
    },
    kedatangan: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "TRIAL"
    },
    pengantarpasien: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "TRIAL"
    },
    keluhanutama: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "TRIAL"
    },
    statustriase: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "TRIAL"
    },
    istrauma: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "TRIAL"
    },
    isresumerujukan: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "TRIAL"
    },
    petugastriase: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "TRIAL"
    },
    waktuselesaitriase: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "TRIAL"
    },
    responsetime: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "TRIAL"
    },
    statusdisposisi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "TRIAL"
    },
    disposisipasien: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "TRIAL"
    },
    pegupdate: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "TRIAL"
    },
    pegupdatewaktu: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "TRIAL"
    },
    riwayatpenyakit: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "TRIAL"
    },
    riwayatpengobatan: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "TRIAL"
    },
    riwayatalergi: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "TRIAL"
    },
    riwayatalergiketerangan: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "TRIAL"
    },
    frekuensinafas: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    suaranafas: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status_airway: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    hentijantung: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    akraldingin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frekuensinadi: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    kekuatannadi: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sianosis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crtdetik: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kun_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ps_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    regpsonline_id_reg: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'formtriase',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_formtriase",
        unique: true,
        fields: [
          { name: "formtriaseid" },
        ]
      },
    ]
  });
};
