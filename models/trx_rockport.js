const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "trx_rockport",
    {
      rockport_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      nilai_vo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      waktu: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kelamin: {
        type: DataTypes.STRING(1),
        allowNull: false,
      },
      hasil: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      no_pegawai: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      ps_mrn: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      mulai: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      finish: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "trx_rockport",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "trx_rockport_pk",
          unique: true,
          fields: [{ name: "rockport_id" }],
        },
      ],
    }
  );
};
