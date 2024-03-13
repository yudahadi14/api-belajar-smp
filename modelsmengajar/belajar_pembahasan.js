const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_pembahasan', {
    lineid4: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lineidjawaban: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'belajar_jawaban',
        key: 'lineid3'
      }
    },
    pembahasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkgambar: {
      type: DataTypes.STRING(250),
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
    }
  }, {
    sequelize,
    tableName: 'belajar_pembahasan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_belajar_pembahasan",
        unique: true,
        fields: [
          { name: "lineid4" },
        ]
      },
    ]
  });
};
