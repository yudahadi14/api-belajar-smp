const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_Roles', {
    ApplicationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'aspnet_Applications',
        key: 'ApplicationId'
      }
    },
    RoleId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    LoweredRoleName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aspnet_Roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "aspnet_Roles_index1",
        unique: true,
        fields: [
          { name: "ApplicationId" },
          { name: "LoweredRoleName" },
        ]
      },
      {
        name: "PK__aspnet_R__8AFACE1B7387D4DB",
        unique: true,
        fields: [
          { name: "RoleId" },
        ]
      },
    ]
  });
};
