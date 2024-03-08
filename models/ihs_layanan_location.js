const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let layananLoc = sequelize.define(
    "ihs_layanan_location",
    {
      ihs_layanan_location_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ref_layanan_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      ihs_location_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "ihs_layanan_location",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihis_layanan_location_pk",
          unique: true,
          fields: [{ name: "ihs_layanan_location_id" }],
        },
      ],
    }
  );
  layananLoc.associate = function (models) {
    layananLoc.hasOne(models.ihs_location, {
      foreignKey: "ihs_location_id",
      sourceKey: "ihs_location_id",
      as: "location",
    });
    layananLoc.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "ref_layanan_id",
      as: "layanan",
    });
  };
  return layananLoc;
};
