const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Hasil = sequelize.define(
    "v_hasil_lab_rsud_cek_2",
    {
      id_minta: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gol: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sub_gol: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_prod: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      itm_lab_hsl_head_nama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      satuan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itm_lab_hsl_dt_ket: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nilai: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      normal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      urut: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_head: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      id_hasil: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      mintalab_dt_id_header: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      mintalab_dt_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "v_hasil_lab_rsud_cek_2",
      schema: "public",
      timestamps: false,
    }
  );
  Hasil.removeAttribute("id");
  Hasil.associate = function (models) {
    // associations can be defined here

    Hasil.hasOne(models.lab_ihs, {
      foreignKey: "lab_ihs_id_prod",
      sourceKey: "id_prod",
      as: "lab_ihs",
    });
    Hasil.hasMany(models.lab_hasil_ihs, {
      foreignKey: "lab_hsl_ihs_id_prod",
      sourceKey: "id_prod",
      as: "lab_hasil_ihs",
    });
    Hasil.hasOne(models.ihs_specimen, {
      foreignKey: "mintalab_dt_id",
      sourceKey: "mintalab_dt_id",
    });
    Hasil.hasOne(models.ihs_service_request, {
      foreignKey: "mintalab_dt_id",
      sourceKey: "mintalab_dt_id",
    });
  };
  return Hasil;
};
