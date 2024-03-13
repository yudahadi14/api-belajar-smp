const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trx_internet_yuda', {
    lineid1: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lineid2: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'daftar_internet_yuda',
        key: 'lineid'
      }
    },
    bulan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tahun: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    checklist: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tgl_pembayaran: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trx_internet_yuda',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_trx_internet_yuda",
        unique: true,
        fields: [
          { name: "lineid1" },
        ]
      },
    ]
  });
};
