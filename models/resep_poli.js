const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Poli = sequelize.define(
    "resep_poli",
    {
      rsp_poli_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      rsp_id_kun: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      rsp_id_prod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rsp_qty_prod: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rsp_ket: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      rsp_waktu_input: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      rsp_peg_input: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rsp_waktu_update: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rsp_peg_update: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_aktif: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      rsp_verifikasi: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      rsp_rsp_aptk_obt_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rsp_rsp_aptk_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rsp_peg_ver_var: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_vaktu_ver_var: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rsp_id_apo: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_id_ako: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_id_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_jml_mnum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_wkt_mnum: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_hari: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_prmntn_rck: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_prmntn_rck_sdia: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_prmntn_rck_jml: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_qty_prod_rck: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_id_resep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_racik_ke: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_id_sebelum: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rsp_pakai_signa: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rsp_pakai_hari: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rsp_pakai_dosis: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rsp_id_ako2: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rsp_tambah: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rsp_ako_teks: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      rsp_id_soap_ugd: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "resep_poli",
      schema: "public",
      timestamps: false,
    }
  );
  Poli.removeAttribute("id");

  Poli.associate = function (models) {
    Poli.hasOne(models.obat_ihs, {
      foreignKey: "obat_ihs_id_produk",
      sourceKey: "rsp_id_prod",
      as: "obat_ihs",
    });
    Poli.hasOne(models.ref_produk, {
      foreignKey: "ref_prod_id",
      sourceKey: "rsp_id_prod",
      as: "ref_produk",
    });
    Poli.hasOne(models.icd, {
      foreignKey: "icd_id_kunjungan",
      sourceKey: "rsp_id_kun",
      as: "icd",
    });
    Poli.hasOne(models.kunjungan, {
      foreignKey: "kun_id",
      sourceKey: "rsp_id_kun",
      as: "kunjungan",
    });
    Poli.hasOne(models.ihs_req_medication, {
      foreignKey: "rsp_poli_id",
      sourceKey: "rsp_poli_id",
      as: "ihs_req_medication",
    });
  };
  return Poli;
};
