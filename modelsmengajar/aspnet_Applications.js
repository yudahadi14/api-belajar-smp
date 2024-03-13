const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_Applications', {
    ApplicationName: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "UQ__aspnet_A__309103316B2A11C2"
    },
    LoweredApplicationName: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "UQ__aspnet_A__17477DE43E043A20"
    },
    ApplicationId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aspnet_Applications',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "aspnet_Applications_Index",
        fields: [
          { name: "LoweredApplicationName" },
        ]
      },
      {
        name: "PK__aspnet_A__C93A4C98D238BDE2",
        unique: true,
        fields: [
          { name: "ApplicationId" },
        ]
      },
      {
        name: "UQ__aspnet_A__17477DE43E043A20",
        unique: true,
        fields: [
          { name: "LoweredApplicationName" },
        ]
      },
      {
        name: "UQ__aspnet_A__309103316B2A11C2",
        unique: true,
        fields: [
          { name: "ApplicationName" },
        ]
      },
    ]
  });
};
