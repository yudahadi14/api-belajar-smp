const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Permintaan = sequelize.define(
    "permintaan_lab_detail",
    {
      mintalab_dt_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      mintalab_dt_id_header: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      mintalab_dt_id_periksa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mintalab_dt_ket: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      mintalab_dt_cito: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      mintalab_dt_luar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      mintalab_dt_input_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      is_batal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "permintaan_lab_detail",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "permintaan_lab_detail_mintalab_dt_id",
          fields: [{ name: "mintalab_dt_id" }],
        },
        {
          name: "permintaan_lab_detail_mintalab_dt_id_header",
          fields: [{ name: "mintalab_dt_id_header" }],
        },
        {
          name: "permintaan_lab_detail_pkey",
          unique: true,
          fields: [{ name: "mintalab_dt_id" }],
        },
      ],
    }
  );
  Permintaan.associate = function (models) {
    // associations can be defined here

    Permintaan.hasOne(models.lab_ihs, {
      foreignKey: "lab_ihs_id_prod",
      sourceKey: "mintalab_dt_id_periksa",
      as: "lab_ihs",
    });
  };

  return Permintaan;
};
