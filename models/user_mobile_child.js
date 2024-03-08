const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_mobile_child', {
    mobile_child_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_mobile_token: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "user_mobile_child_un"
    },
    user_mobile_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    peg_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tokenfcm_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iot_dvc_code: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_mobile_child',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_mobile_child_pk",
        unique: true,
        fields: [
          { name: "mobile_child_id" },
        ]
      },
      {
        name: "user_mobile_child_un",
        unique: true,
        fields: [
          { name: "user_mobile_token" },
        ]
      },
    ]
  });
};
