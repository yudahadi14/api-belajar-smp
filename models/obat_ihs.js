const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "obat_ihs",
    {
      obat_ihs_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      obat_ihs_id_produk: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: "obat_ihs_obat_ihs_id_produk_key",
      },
      obat_ihs_bentuk: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_bentuk_ihs: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_rute: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_numerator_val: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_numerator: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_denominator_val: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_denominator: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_kode_ingredients: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_kode_template: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      obat_ihs_kode_aktual: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "obat_ihs",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "obat_ihs_obat_ihs_id_produk_key",
          unique: true,
          fields: [{ name: "obat_ihs_id_produk" }],
        },
      ],
    }
  );
};
