const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpdesk_keterangan', {
    hdesk_ktrngn_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hdesk_ktrngn_nama: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'helpdesk_keterangan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "helpdesk_keterangan_pkey",
        unique: true,
        fields: [
          { name: "hdesk_ktrngn_id" },
        ]
      },
    ]
  });
};
