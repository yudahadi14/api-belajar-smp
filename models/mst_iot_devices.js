const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_iot_devices', {
    iot_dvc_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    iot_dvc_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fcm_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iot_dvc_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mst_iot_devices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_iot_devices_pk",
        unique: true,
        fields: [
          { name: "iot_dvc_id" },
        ]
      },
    ]
  });
};
