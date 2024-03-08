const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let Encounter = sequelize.define(
    "ihs_encounter",
    {
      ihs_encounter_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      rkun_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
      },
      encounter_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "ihs_encounter",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ihs_encounter_pk",
          unique: true,
          fields: [{ name: "ihs_encounter_id" }],
        },
      ],
    }
  );
  Encounter.associate = function (models) {
    // associations can be defined here
    Encounter.hasMany(models.kunjungan, {
      foreignKey: "kun_id_rencana_kunjungan",
      sourceKey: "rkun_id",
      as: "kunjungan",
    });
    Encounter.hasOne(models.rencana_kunjungan, {
      foreignKey: "rkun_id",
      sourceKey: "rkun_id",
      as: "rencana_kunjungan",
    });
    Encounter.hasMany(models.trx_history_rajal, {
      foreignKey: "rkun_id",
      sourceKey: "rkun_id",
      as: "history_rajal",
    });
  };

  return Encounter;
};
