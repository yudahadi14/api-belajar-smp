const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sep_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tglsep: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ppkpelayanan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jnspelayanan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    klsrawat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomr: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    asalrujukan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tglrujukan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    norujukan: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ppkrujukan: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    catatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diagawal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    politujuan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    polieksekutif: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cob: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    lakalantas: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    penjamin: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    lokasilaka: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notelp: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pegid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    psid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nosep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdiag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    noka: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hakkelas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    namapasien: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kdpoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    jnspeserta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    psiat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmppkrujukan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tiperujukan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgllahir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    polirs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lansia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    umur: {
      type: DataTypes.STRING,
      allowNull: true
    },
    noantri: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penanggung: {
      type: DataTypes.STRING,
      allowNull: true
    },
    peg_username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nokwitansi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tglpulang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    katarak: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tglkejadian: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    suplesi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nosepsuplesi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kdprop: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kdkab: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kdkec: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nosurat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kddpjp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wkt_input: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmdrdpjp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    statusinap: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idrkun: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idinap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wkt_delete: {
      type: DataTypes.DATE,
      allowNull: true
    },
    peg_deleted: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sep_history',
    schema: 'public',
    timestamps: false
  });
};
