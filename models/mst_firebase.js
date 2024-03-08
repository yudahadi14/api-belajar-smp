const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_firebase', {
    firebase_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    peg_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: "mst_firebase_un"
    },
    ps_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: "mst_firebase_un2"
    },
    firebase_clnt_token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_firebase',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_firebase_pk",
        unique: true,
        fields: [
          { name: "firebase_id" },
        ]
      },
      {
        name: "mst_firebase_un",
        unique: true,
        fields: [
          { name: "peg_id" },
        ]
      },
      {
        name: "mst_firebase_un2",
        unique: true,
        fields: [
          { name: "ps_id" },
        ]
      },
    ]
  });
};
