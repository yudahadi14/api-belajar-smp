const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_pertanyaan', {
    lineid2: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lineidgambar: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'belajar_gambar',
        key: 'lineid1'
      }
    },
    pertanyaan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createddate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
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
    tableName: 'belajar_pertanyaan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_study_belajar_pertanyaan",
        unique: true,
        fields: [
          { name: "lineid2" },
        ]
      },
    ]
  });
};
