const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_mreferensi', {
    lineid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    jenisdokumen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FileFileName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FileContentType: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    FileLength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createddate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    typeupload: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'belajar_mreferensi',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_study_mreferensi",
        unique: true,
        fields: [
          { name: "lineid" },
        ]
      },
    ]
  });
};
