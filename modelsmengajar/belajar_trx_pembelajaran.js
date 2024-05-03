const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('belajar_trx_pembelajaran', {
    lineid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fk_header_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fk_gambar_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fk_pertanyaan_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fk_jawaban_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fk_pembahasan_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    fk_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jawaban_json: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'belajar_trx_pembelajaran',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "belajar_trx_pembelajaran_PK",
        unique: true,
        fields: [
          { name: "lineid" },
        ]
      },
    ]
  });
};
