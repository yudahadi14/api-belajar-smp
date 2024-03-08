const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const refProdukPaketMcu =  sequelize.define('ref_produk_paket_mcu', {
    ref_prod_pkt_mcu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_prod_pkt_mcu_id_paket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref_prod_pkt_mcu_id_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref_prod_pkt_mcu_id_grup: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ref_produk_paket_mcu',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ref_produk_paket_mcu_pkey",
        unique: true,
        fields: [
          { name: "ref_prod_pkt_mcu_id" },
        ]
      },
    ]
  });
  refProdukPaketMcu.associate = function (models) {
    // associations can be defined here
    refProdukPaketMcu.hasOne(models.ref_produk, {
      foreignKey: "ref_prod_id",
      sourceKey: "ref_prod_pkt_mcu_id_produk",
      as: "produk",
    });
    // refProdukPaketMcu.hasOne(models.ref_paket_mcu_new, {
    //   foreignKey: "ref_pkt_mcu_id",
    //   sourceKey: "ref_prod_pkt_mcu_id_paket",
    //   as: "produk_paket",
    // });
  };

  return refProdukPaketMcu;
};
