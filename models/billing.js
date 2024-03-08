const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Billing = sequelize.define(
    "billing",
    {
      bill_id_rec: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bill_tabel: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      bill_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      bill_id_pasien: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bill_id_png_cash: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_png_non_cash: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bill_id_stat_thd_parent: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_id_rkun: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bill_id_kun: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_dokter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bill_id_inap: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_ruang: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_id_tempat_tidur: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_id_kelas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_id_produk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bill_qty: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bill_harga_satuan: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bill_biaya: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bill_disc: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bill_ppn: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_id_pembayaran: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_waktu: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      bill_id_jurnal: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_prod_jasa_dokter: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_prod_jasa_perawat: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_prod_jasa_rs: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_prod_jasa_yayasan: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_png_noncash_price_hit_on: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      bill_png_noncash_fix_price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_png_percent_markup: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_png_percent_disc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_png_percent_share: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_png_percent_share_cito: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_stat_harga_pokok: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_stat_harga_jual: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_final_harga_jual: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_is_cito: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_stat_cost_share: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_administrasi: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_pemeriksaan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_operator: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_anastesi: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_lainnya: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_tindparamedis: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_alatbahan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_oksigen: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_investasi: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_komp_pihak3: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_akunkomp_administrasi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_pemeriksaan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_operator: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_anastesi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_lainnya: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_tindparamedis: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_alatbahan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_oksigen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_investasi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_akunkomp_pihak3: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bill_promo_fix_price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_promo_percent_disc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_promo_percent_disc_cito: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_persen_disc: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_png_note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      bill_flexi_share: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      bill_id_gudang: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_peg_input: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_dokter2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_id_dokter3: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      bill_tunda: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      bill_disc_operator: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_disc_anastesi: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_disc_lainnya: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_disc_alatbahan: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      bill_id_icd9: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "billing",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "biling_png_non_cash_bill_id_produk_bill_tabel_bill_id_pasien",
          fields: [
            { name: "bill_id_png_cash" },
            { name: "bill_id_produk" },
            { name: "bill_tabel" },
            { name: "bill_id_pasien" },
            { name: "bill_id_pembayaran" },
          ],
        },
        {
          name: "billing_bill_id_dokter",
          fields: [{ name: "bill_id_dokter" }],
        },
        {
          name: "billing_bill_id_dokter2",
          fields: [{ name: "bill_id_dokter2" }],
        },
        {
          name: "billing_bill_id_dokter3",
          fields: [{ name: "bill_id_dokter3" }],
        },
        {
          name: "billing_bill_id_inap",
          fields: [{ name: "bill_id_inap" }],
        },
        {
          name: "billing_bill_id_kun",
          fields: [{ name: "bill_id_kun" }],
        },
        {
          name: "billing_bill_id_layanan",
          fields: [{ name: "bill_id_layanan" }],
        },
        {
          name: "billing_bill_id_pasien",
          fields: [{ name: "bill_id_pasien" }],
        },
        {
          name: "billing_bill_id_pembayaran",
          fields: [{ name: "bill_id_pembayaran" }],
        },
        {
          name: "billing_bill_id_pembayaran2",
          fields: [{ name: "bill_id_pembayaran" }],
        },
        {
          name: "billing_bill_id_pembayaran_bill_tabel",
          fields: [{ name: "bill_id_pembayaran" }, { name: "bill_tabel" }],
        },
        {
          name: "billing_bill_id_pembayaran_bill_tabel_bill_id_rkun",
          fields: [
            { name: "bill_id_pembayaran" },
            { name: "bill_id_rkun" },
            { name: "bill_tabel" },
          ],
        },
        {
          name: "billing_bill_id_produk",
          fields: [{ name: "bill_id_produk" }],
        },
        {
          name: "billing_bill_id_produk_bill_id_pembayaran",
          fields: [{ name: "bill_id_produk" }, { name: "bill_id_pembayaran" }],
        },
        {
          name: "billing_bill_id_produk_bill_tgl",
          fields: [{ name: "bill_id_produk" }, { name: "bill_tgl" }],
        },
        {
          name: "billing_bill_id_rec_bill_tabel",
          fields: [{ name: "bill_id_rec" }, { name: "bill_tabel" }],
        },
        {
          name: "billing_bill_id_rkun",
          fields: [{ name: "bill_id_rkun" }],
        },
        {
          name: "billing_bill_id_rkun_bill_id_pembayaran",
          fields: [{ name: "bill_id_rkun" }, { name: "bill_id_pembayaran" }],
        },
        {
          name: "billing_bill_id_rkun_bill_id_pembayaran_bill_tunda",
          fields: [
            { name: "bill_id_rkun" },
            { name: "bill_id_pembayaran" },
            { name: "bill_tunda" },
          ],
        },
        {
          name: "billing_bill_idproduk_bill_waktu",
          fields: [
            { name: "bill_id_produk", order: "DESC" },
            { name: "bill_waktu", order: "DESC" },
          ],
        },
        {
          name: "billing_bill_tabel",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_a",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_bayar_id_rkun",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rkun" }],
        },
        {
          name: "billing_bill_tabel_bill_id_rec",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rec" }],
        },
        {
          name: "billing_bill_tabel_bill_id_rec_lab",
          fields: [{ name: "bill_id_rec" }, { name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_bkn_pmbyran",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_id_rkun",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rkun" }],
        },
        {
          name: "billing_bill_tabel_jasmed_ranap",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_lab",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_lab2",
          fields: [{ name: "bill_tabel" }, { name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tabel_lprn_rajal",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_not_bayar_id_rkun",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rkun" }],
        },
        {
          name: "billing_bill_tabel_pembayaran",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_radio",
          fields: [{ name: "bill_id_rkun" }, { name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_radio2",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rec" }],
        },
        {
          name: "billing_bill_tabel_tindakan",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_tindakan_bill_id_rec",
          fields: [{ name: "bill_id_rec" }, { name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_tindakan_farmasi",
          fields: [{ name: "bill_tabel" }],
        },
        {
          name: "billing_bill_tabel_tindakan_lab_rad_bill_id_rec",
          fields: [{ name: "bill_tabel" }, { name: "bill_id_rec" }],
        },
        {
          name: "billing_bill_tgl_thn_2012",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_1",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_10",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_11",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_12",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_2",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_3",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_4",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_5",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_6",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_7",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_8",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2012_bln_9",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_1",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_10",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_11",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_12",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_2",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_3",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_4",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_5",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_6",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_7",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_8",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_tgl_thn_2013_bln_9",
          fields: [{ name: "bill_tgl" }],
        },
        {
          name: "billing_bill_waktu",
          fields: [{ name: "bill_waktu" }],
        },
        {
          name: "billing_cari_jml_tindk",
          fields: [
            { name: "bill_waktu" },
            { name: "bill_id_pembayaran" },
            { name: "bill_tabel" },
          ],
        },
        {
          name: "billing_id_gudang",
          fields: [{ name: "bill_id_gudang" }],
        },
        {
          name: "billing_id_prod_id_gudang",
          fields: [{ name: "bill_id_produk" }, { name: "bill_id_gudang" }],
        },
        {
          name: "billing_id_prod_id_gudang_id_waktu",
          fields: [
            { name: "bill_id_produk" },
            { name: "bill_id_gudang" },
            { name: "bill_waktu" },
          ],
        },
        {
          name: "billing_id_prod_id_gudang_id_waktu_not_retur_obat",
          fields: [
            { name: "bill_id_produk" },
            { name: "bill_id_gudang" },
            { name: "bill_waktu" },
            { name: "bill_tabel" },
          ],
        },
        {
          name: "billing_id_rkun_id_produk",
          fields: [{ name: "bill_id_rkun" }, { name: "bill_id_produk" }],
        },
        {
          name: "billing_ilham207",
          fields: [
            { name: "bill_id_rkun" },
            { name: "bill_id_pasien" },
            { name: "bill_tabel" },
            { name: "bill_id_pembayaran" },
          ],
        },
        {
          name: "billing_pkey",
          unique: true,
          fields: [{ name: "bill_id_rec" }, { name: "bill_tabel" }],
        },
      ],
    }
  );
  Billing.associate = function (models) {
    // associations can be defined here
    Billing.hasOne(models.ref_icd9, {
      foreignKey: "ref_icd9_id",
      sourceKey: "bill_id_icd9",
    });
    Billing.hasOne(models.ihs_pasien, {
      foreignKey: "ps_id",
      sourceKey: "bill_id_pasien",
    });
  };
  return Billing;
};
