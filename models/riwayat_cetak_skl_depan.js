const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('riwayat_cetak_skl_depan', {
    rcs_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rcs_id_peg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rcs_waktu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rcs_id_reg_bayi: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'riwayat_cetak_skl_depan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "riwayat_cetak_skl_depan_pkey",
        unique: true,
        fields: [
          { name: "rcs_id" },
        ]
      },
    ]
  });
};
