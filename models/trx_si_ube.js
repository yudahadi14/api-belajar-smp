const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const siUbe = sequelize.define(
    "trx_si_ube",
    {
      si_ube_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      si_ube_filename: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      is_locked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
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
      kun_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      tipe_berkas_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ube_rule_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "trx_si_ube",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "trx_si_ube_pkey",
          unique: true,
          fields: [{ name: "si_ube_id" }],
        },
      ],
    }
  );
  siUbe.associate = function (models) {
    // associations can be defined here
    siUbe.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "created_by",
      as: "pegawai",
    });
  };

  return siUbe;
};
