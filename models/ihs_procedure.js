const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ihs_procedure",
    {
      ihs_procedure_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
      },
      procedure_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bill_id_rec: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      kun_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

    },
    {
      sequelize,
      tableName: "ihs_procedure",
      schema: "public",
      timestamps: false,
    }
  );
};
