const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let helpdesk = sequelize.define(
    "helpdesk",
    {
      hdesk_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      hdesk_lokasi: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hdesk_pesan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hdesk_id_peg: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hdesk_tgl_input: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      hdesk_tgl_wkt_input: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      hdesk_selesai: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      hdesk_tgl_selesai: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      hdesk_tgl_wkt_selesai: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      hdesk_tindakan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hdesk_id_peg_sim: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hdesk_ket: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hdesk_tgl_wkt_respon: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      hdesk_id_peg_respon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hdesk_id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hdesk_id_kategori: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "helpdesk",
      schema: "public",
      timestamps: false,
    }
  );
  helpdesk.associate = function (models) {
    // associations can be defined here
    helpdesk.hasOne(models.helpdesk_detail, {
      foreignKey: "hdesk_dt_id_head",
      sourceKey: "hdesk_id",
      as: "detail",
    });
    helpdesk.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "hdesk_id_peg",
      as: "pegawai",
    });
  };
  return helpdesk;
};
