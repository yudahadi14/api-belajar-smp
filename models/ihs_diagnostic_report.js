const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ihs_diagnostic_report",
    {
      ihs_dgnstc_rprt_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      dgnstc_rprt_id: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      id_hasil: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "ihs_diagnostic_report",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_diagnostic_report_pk",
          unique: true,
          fields: [{ name: "ihs_dgnstc_rprt_id" }],
        },
      ],
    }
  );
};
