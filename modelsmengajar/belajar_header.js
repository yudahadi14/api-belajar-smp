const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_header', {
    lineid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    link_gambar: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    createddate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nourut: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'belajar_header',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_study_belajar_header",
        unique: true,
        fields: [
          { name: "lineid" },
        ]
      },
    ]
  });
};
