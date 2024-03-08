const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "hepi_c_fr",
    {
      hepi_c_fr_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      hepi_c_fr_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_mrn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      fr1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr12_b: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "hepi_c_fr",
      schema: "public",
      timestamps: false,
    }
  );
};
