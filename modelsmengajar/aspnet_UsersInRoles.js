const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_UsersInRoles', {
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aspnet_Users',
        key: 'UserId'
      }
    },
    RoleId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aspnet_Roles',
        key: 'RoleId'
      }
    }
  }, {
    sequelize,
    tableName: 'aspnet_UsersInRoles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "aspnet_UsersInRoles_index",
        fields: [
          { name: "RoleId" },
        ]
      },
      {
        name: "PK__aspnet_U__AF2760ADB1C15E9E",
        unique: true,
        fields: [
          { name: "UserId" },
          { name: "RoleId" },
        ]
      },
    ]
  });
};
