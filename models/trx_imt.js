const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trx_imt', {
    imt_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    imt_hasil: {
      type: DataTypes.REAL,
      allowNull: false
    },
    range_imt: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    klasifikasi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    berat_badan: {
      type: DataTypes.REAL,
      allowNull: true
    },
    ps_mrn: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trx_imt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_imt_pk",
        unique: true,
        fields: [
          { name: "imt_id" },
        ]
      },
    ]
  });
};
