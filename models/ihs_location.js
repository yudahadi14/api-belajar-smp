const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Location = sequelize.define(
    "ihs_location",
    {
      ihs_location_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ihs_organization_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      root_location_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ihs_location",
      schema: "public",
      timestamps: false,
    }
  );
  Location.associate = function (models) {
    Location.hasOne(models.ihs_layanan_location, {
      foreignKey: "ihs_location_id",
      sourceKey: "ihs_location_id",
      as: "layanan_location",
    });
    Location.hasOne(models.ihs_organization, {
      foreignKey: "ihs_organization_id",
      sourceKey: "ihs_organization_id",
      as: "organization",
    });
  };
  return Location;
};
