const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asp_ref_propinsi', {
    ref_propinsi_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_propinsi_nama: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref_propinsi_id_mst_propinsi: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asp_ref_propinsi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asp_ref_propinsi_pkey",
        unique: true,
        fields: [
          { name: "ref_propinsi_id" },
        ]
      },
    ]
  });
};
