const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const siUbe = sequelize.define(
    "trx_si_ube_rule",
    {
      ube_rule_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      penanggung_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      tipe_berkas_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      sequelize,
      tableName: "trx_si_ube_rule",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "trx_si_ube_rule_pkey",
          unique: true,
          fields: [{ name: "ube_rule_id" }],
        },
      ],
    }
  );
  siUbe.associate = function (models) {
    // associations can be defined here
    siUbe.belongsTo(models.mst_tipe_berkas, {
      foreignKey: "tipe_berkas_id",
      sourceKey: "tipe_berkas_id",
      as: "tipe_berkas",
    });
    siUbe.hasOne(models.trx_si_ube, {
      foreignKey: "tipe_berkas_id",
      sourceKey: "tipe_berkas_id",
      as: "data_si_ube",
    });
    siUbe.hasOne(models.asp_penanggung, {
      foreignKey: "png_id",
      sourceKey: "penanggung_id",
      as: "penanggung",
    });
    siUbe.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "created_by",
      as: "pegawai",
    });
  };

  return siUbe;
};
