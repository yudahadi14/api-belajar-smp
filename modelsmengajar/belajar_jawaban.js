const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_jawaban', {
    lineid3: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lineidpertanyaan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'belajar_pertanyaan',
        key: 'lineid2'
      }
    },
    jawaban: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nourut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createddate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'belajar_jawaban',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_belajar_jawaban",
        unique: true,
        fields: [
          { name: "lineid3" },
        ]
      },
    ]
  });
};
