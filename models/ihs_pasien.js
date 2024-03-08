const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let Pasien = sequelize.define(
    "ihs_pasien",
    {
      ihs_pasien_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ps_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pasien_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "ihs_pasien",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_pasien_pk",
          unique: true,
          fields: [{ name: "pasien_id" }],
        },
      ],
    }
  );
  Pasien.associate = function (models) {
    // associations can be defined here
    Pasien.hasOne(models.asp_pasien, {
      foreignKey: "ps_id",
      sourceKey: "ps_id",
      as: "asp_pasien",
    });
  };

  return Pasien;
};
