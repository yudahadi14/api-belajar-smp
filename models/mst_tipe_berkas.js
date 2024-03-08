const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const tipe_berkas = sequelize.define(
    "mst_tipe_berkas",
    {
      tipe_berkas_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama_berkas: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      is_others: {
        type: DataTypes.BOOLEAN,
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
      input_type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "photo",
      },
      placeholder: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "mst_tipe_berkas",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "mst_tipe_berkas_pkey",
          unique: true,
          fields: [{ name: "tipe_berkas_id" }],
        },
      ],
    }
  );
  tipe_berkas.associate = function (models) {
    // associations can be defined here
    tipe_berkas.hasOne(models.trx_si_ube, {
      foreignKey: "tipe_berkas_id",
      sourceKey: "tipe_berkas_id",
      as: "data_si_ube",
    });
  };
  return tipe_berkas
};
