const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const refPaketMcu = sequelize.define(
    "ref_paket_mcu_new",
    {
      ref_pkt_mcu_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ref_pkt_mcu_kode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ref_pkt_mcu_prod_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "ref_paket_mcu_new_ukey",
      },
      ref_pkt_mcu_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ref_paket_mcu_new",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ref_paket_mcu_new_pkey",
          unique: true,
          fields: [{ name: "ref_pkt_mcu_id" }],
        },
        {
          name: "ref_paket_mcu_new_ukey",
          unique: true,
          fields: [{ name: "ref_pkt_mcu_prod_id" }],
        },
      ],
    }
  );
  refPaketMcu.associate = function (models) {
    // associations can be defined here
    refPaketMcu.hasMany(models.ref_produk_paket_mcu, {
      foreignKey: "ref_prod_pkt_mcu_id_paket",
      sourceKey: "ref_pkt_mcu_id",
      as: "produk_paket",
    });
    refPaketMcu.hasOne(models.ref_produk, {
      foreignKey: "ref_prod_id",
      sourceKey: "ref_pkt_mcu_prod_id",
      as: "produk",
    });
  };

  return refPaketMcu;
};
