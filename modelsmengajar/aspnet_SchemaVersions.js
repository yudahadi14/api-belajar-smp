const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_SchemaVersions', {
    Feature: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    CompatibleSchemaVersion: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    IsCurrentVersion: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'aspnet_SchemaVersions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__aspnet_S__5A1E6BC1B88B9A0A",
        unique: true,
        fields: [
          { name: "Feature" },
          { name: "CompatibleSchemaVersion" },
        ]
      },
    ]
  });
};
