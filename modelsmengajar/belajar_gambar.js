const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_gambar', {
    lineid1: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lineidheader: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'belajar_header',
        key: 'lineid'
      }
    },
    Nama: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FileName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FileLength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FileContent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FileLink: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'belajar_gambar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_study_belajar_gambar",
        unique: true,
        fields: [
          { name: "lineid1" },
        ]
      },
    ]
  });
};
