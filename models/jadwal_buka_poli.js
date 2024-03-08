const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jadwal_buka_poli', {
    hari: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_poli: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jam_buka: {
      type: DataTypes.TIME,
      allowNull: true
    },
    jam_tutup: {
      type: DataTypes.TIME,
      allowNull: true
    },
    tgl_input: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    periodeawal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    periodeakhir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    thn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    blnint1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blnint2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'jadwal_buka_poli',
    schema: 'public',
    timestamps: false
  });
};
