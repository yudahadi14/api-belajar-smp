const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const IHS = sequelize.define(
    "ihs_service_request",
    {
      ihs_srvce_rqst_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      mintalab_dt_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      srvce_rqst_id: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      ihs_pasien_code: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      ihs_pasien_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      ihs_practioner_code: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      ihs_practioner_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      ihs_encounter_code: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ihs_service_request",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_service_request_pk",
          unique: true,
          fields: [{ name: "ihs_srvce_rqst_id" }],
        },
      ],
    }
  );
  IHS.associate = function (models) {
    // associations can be defined here

    IHS.hasOne(models.permintaan_lab_detail, {
      foreignKey: "mintalab_dt_id",
      sourceKey: "mintalab_dt_id",
    });
  };

  return IHS;
};
