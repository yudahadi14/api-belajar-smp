const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_auth_bridging', {
    auth_bridging_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    auth_bridging_username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "mst_auth_bridging_un"
    },
    auth_bridging_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    auth_bridging_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_auth_bridging',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_auth_bridging_pk",
        unique: true,
        fields: [
          { name: "auth_bridging_id" },
        ]
      },
      {
        name: "mst_auth_bridging_un",
        unique: true,
        fields: [
          { name: "auth_bridging_username" },
        ]
      },
    ]
  });
};
