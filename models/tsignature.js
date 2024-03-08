const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tsignature', {
    signatureid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "tsignature_un"
    },
    entrydate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pegawaiid: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tsignature',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tsignature_pk",
        unique: true,
        fields: [
          { name: "signatureid" },
        ]
      },
      {
        name: "tsignature_un",
        unique: true,
        fields: [
          { name: "signature" },
        ]
      },
    ]
  });
};
