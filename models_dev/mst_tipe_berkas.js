const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_tipe_berkas', {
    tipe_berkas_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_berkas: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_tipe_berkas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_tipe_berkas_pkey",
        unique: true,
        fields: [
          { name: "tipe_berkas_id" },
        ]
      },
    ]
  });
};
