const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asp_ref_kecamatan', {
    ref_kcamatan_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_kcamatan_kotadati2_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asp_ref_kotamadya_dati2',
        key: 'ref_kotadati2_id'
      }
    },
    ref_kcamatan_nama: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref_kcmtn_mst_kab: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asp_ref_kecamatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asp_ref_kecamatan_pkey",
        unique: true,
        fields: [
          { name: "ref_kcamatan_id" },
        ]
      },
    ]
  });
};
