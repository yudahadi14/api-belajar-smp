const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ref_icd9', {
    ref_icd9_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ref_icd9_kode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ref_icd9_deskripsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ref_icd9_aktif: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ref_icd9',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ref_icd9_pkey",
        unique: true,
        fields: [
          { name: "ref_icd9_id" },
        ]
      },
      {
        name: "ref_icd9_ref_icd9_aktif",
        fields: [
          { name: "ref_icd9_aktif" },
        ]
      },
      {
        name: "ref_icd9_ref_icd9_deskripsi",
        fields: [
          { name: "ref_icd9_deskripsi" },
        ]
      },
      {
        name: "ref_icd9_ref_icd9_kode",
        fields: [
          { name: "ref_icd9_kode" },
        ]
      },
    ]
  });
};
