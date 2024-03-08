const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpdesk_detail', {
    hdesk_dt_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hdesk_dt_id_head: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hdesk_dt_tgl_wkt_input: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    hdesk_dt_id_peg_input: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hdesk_dt_id_peg_teknisi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hdesk_dt_id_ket: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hdesk_dt_ket: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hdesk_dt_tgl_wkt_selesai: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'helpdesk_detail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "helpdesk_detail_pkey",
        unique: true,
        fields: [
          { name: "hdesk_dt_id" },
        ]
      },
    ]
  });
};
