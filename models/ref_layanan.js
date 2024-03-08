const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const refLayanan = sequelize.define(
    "ref_layanan",
    {
      ref_layanan_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ref_layanan_nama: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      ref_layanan_id_gudang: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ref_layanan_sifat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "NOT USED on RSC",
      },
      ref_layanan_id_bag: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ref_layanan_kategori: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "NOT USED on RSC",
      },
      ref_layanan_aktif: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ref_layanan_catatan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ref_layanan_id_tbl_header: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      ref_layanan_id_tbl_detail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      ref_layanan_id_tbl_billing: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      ref_layanan_ri: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ref_layanan_rj: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ref_layanan_up: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ref_layanan_poli: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ref_layanan_spesialis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ref_layanan_coa: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment:
          "true=unit sekaligus costcenter ,  false=unit dengan bamyak costcenter",
      },
      ref_layanan_coa_no_bagi: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: "true=produk dengan layanan ini TIDAK memiliki bagi hasil",
      },
    },
    {
      sequelize,
      tableName: "ref_layanan",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "ref_lay_id_nama",
          fields: [{ name: "ref_layanan_id" }, { name: "ref_layanan_nama" }],
        },
        {
          name: "ref_layanan_pkey",
          unique: true,
          fields: [{ name: "ref_layanan_id" }],
        },
        {
          name: "ref_layanan_ref_layanan_poli_ref_layanan_id",
          fields: [{ name: "ref_layanan_poli" }, { name: "ref_layanan_id" }],
        },
      ],
    }
  );
  refLayanan.associate = function (models) {
    refLayanan.hasOne(models.refpoli_bpjs, {
      foreignKey: "kd_layananpoli_rsc",
      sourceKey: "ref_layanan_id",
      as: "poli_bpjs",
    });
    refLayanan.hasOne(models.ihs_layanan_location, {
      foreignKey: "ref_layanan_id",
      sourceKey: "ref_layanan_id",
      as: "layanan_location",
    });
  };
  return refLayanan;
};
