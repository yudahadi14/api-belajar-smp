const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const pasien = sequelize.define(
    "pasien",
    {
      ps_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ps_mrn: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      ps_tgldaftarawal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ps_id_layananawal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      old_sys_sync: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      fk_usr_mbl: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_trx_mbl: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "pasien",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "pasien_pkey",
          unique: true,
          fields: [{ name: "ps_id" }],
        },
        {
          name: "pasien_ps_id_ps_mrn",
          fields: [{ name: "ps_id" }],
        },
        {
          name: "pasien_ps_id_ps_mrn2",
          fields: [{ name: "ps_id" }, { name: "ps_mrn" }],
        },
        {
          name: "pasien_ps_id_ps_mrn_like_2xpersen",
          fields: [{ name: "ps_id" }, { name: "ps_mrn" }],
        },
        {
          name: "pasien_ps_mrn",
          fields: [{ name: "ps_mrn" }],
        },
        {
          name: "pasien_ps_mrn2",
          fields: [{ name: "ps_mrn" }],
        },
        {
          name: "pasien_ps_mrn3",
          fields: [{ name: "ps_mrn" }],
        },
        {
          name: "pasien_ps_mrn_like_2xpersen",
          fields: [{ name: "ps_mrn" }],
        },
      ],
    }
  );
  pasien.associate = function (models) {
    // associations can be defined here
    pasien.hasOne(models.asp_pasien, {
      foreignKey: "ps_id",
      sourceKey: "ps_id",
      as: "asp_pasien",
    });
  };
  return pasien;
};
