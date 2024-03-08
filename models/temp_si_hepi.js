const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "temp_si_hepi",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ps_mrn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fr12_b: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelompok_resiko: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kode_provinsi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kode_kecamatan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kode_kelurahan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_hamil: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      g: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      p: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      a: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "temp_si_hepi",
      schema: "public",
      timestamps: false,
      // indexes: [
      //   {
      //     name: "temp_si_hepi_pk",
      //     unique: true,
      //     fields: [{ name: "id" }],
      //   },
      // ],
    }
  );
};
