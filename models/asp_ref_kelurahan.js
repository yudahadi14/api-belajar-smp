const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asp_ref_kelurahan', {
    ref_klurahan_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    ref_klurahan_camat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asp_ref_kecamatan',
        key: 'ref_kcamatan_id'
      }
    },
    ref_klurahan_nama: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ref_klurahan_kodepos: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asp_ref_kelurahan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "asp_ref_kelurahan_pkey",
        unique: true,
        fields: [
          { name: "ref_klurahan_id" },
        ]
      },
    ]
  });
};
