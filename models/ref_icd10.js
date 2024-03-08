const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ref_icd10', {
    ref_icd10_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ref_icd10_kode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ref_icd10_deskripsi: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ref_icd10',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ref_icd10_pkey",
        unique: true,
        fields: [
          { name: "ref_icd10_id" },
        ]
      },
    ]
  });
};
