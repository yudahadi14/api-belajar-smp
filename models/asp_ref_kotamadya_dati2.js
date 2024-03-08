const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asp_ref_kotamadya_dati2', {
    ref_kotadati2_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_kotadati2_propinsi_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asp_ref_propinsi',
        key: 'ref_propinsi_id'
      }
    },
    ref_kotadati2_nama: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref_kotadati2_id_mst_propinsi: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asp_ref_kotamadya_dati2',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asp_ref_kotamadya_dati2_pkey",
        unique: true,
        fields: [
          { name: "ref_kotadati2_id" },
        ]
      },
    ]
  });
};
