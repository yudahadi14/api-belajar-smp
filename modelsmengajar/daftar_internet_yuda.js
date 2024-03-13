const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftar_internet_yuda', {
    lineid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nama_pelanggan: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    nama_ppoe: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    no_telepon: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'daftar_internet_yuda',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_daftar_internet_yuda",
        unique: true,
        fields: [
          { name: "lineid" },
        ]
      },
    ]
  });
};
