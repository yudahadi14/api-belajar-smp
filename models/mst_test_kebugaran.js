const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_test_kebugaran', {
    test_kebugaran_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    no_pegawai: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    nama_pegawai: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    kelamin_pegawai: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    umur_pegawai: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_test_kebugaran',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_test_kebugaran_pk",
        unique: true,
        fields: [
          { name: "test_kebugaran_id" },
        ]
      },
    ]
  });
};
