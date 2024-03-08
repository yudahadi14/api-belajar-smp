const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ihs_observation",
    {
      ihs_observe_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      observe_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      observe_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kun_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      mintalab_dt_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ihs_observation",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_observation_pk",
          unique: true,
          fields: [{ name: "ihs_observe_id" }],
        },
      ],
    }
  );
};
