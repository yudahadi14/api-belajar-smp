const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_Users', {
    ApplicationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'aspnet_Applications',
        key: 'ApplicationId'
      }
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    LoweredUserName: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    MobileAlias: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    IsAnonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    LastActivityDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'aspnet_Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "aspnet_Users_Index",
        unique: true,
        fields: [
          { name: "ApplicationId" },
          { name: "LoweredUserName" },
        ]
      },
      {
        name: "aspnet_Users_Index2",
        fields: [
          { name: "ApplicationId" },
          { name: "LastActivityDate" },
        ]
      },
      {
        name: "PK__aspnet_U__1788CC4D8E91D713",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
