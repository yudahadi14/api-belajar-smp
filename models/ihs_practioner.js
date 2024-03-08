const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let practioner = sequelize.define(
    "ihs_practioner",
    {
      ihs_practioner_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      peg_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      practioner_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "ihs_practioner",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_practioner_pk",
          unique: true,
          fields: [{ name: "ihs_practioner_id" }],
        },
      ],
    }
  );
  practioner.associate = function (models) {
    // associations can be defined here
    practioner.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "peg_id",
      as: "pegawai",
    });
  };
  return practioner
};
