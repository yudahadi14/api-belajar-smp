const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let Organization = sequelize.define(
    "ihs_organization",
    {
      ihs_organization_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ihs_organization_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      organization_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      root_organization_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ihs_organization",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_organization_pk",
          unique: true,
          fields: [{ name: "ihs_organization_id" }],
        },
      ],
    }
  );
  Organization.associate = function (models) {
    Organization.hasMany(models.ihs_organization, {
      foreignKey: "root_organization_id",
      sourceKey: "ihs_organization_id",
      as: "children",
    });
  };
  return Organization;
};
