const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trx_signature', {
    signature_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peg_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peg_nama: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trx_signature',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_signature_pk",
        unique: true,
        fields: [
          { name: "signature_id" },
        ]
      },
    ]
  });
};
