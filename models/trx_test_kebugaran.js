const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "trx_test_kebugaran",
    {
      no_pegawai: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: "trx_test_kebugaran_un",
      },
      nilai_vo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      waktu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hasil: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "trx_test_kebugaran",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "trx_test_kebugaran_pk",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
