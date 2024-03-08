const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const rencanaKunjungan = sequelize.define(
    "rencana_kunjungan",
    {
      rkun_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      rkun_id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rkun_tgl_daftar: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      rkun_waktu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rkun_nomor: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      rkun_id_pasien: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      rkun_tgl_visit: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      rkun_id_dokter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rkun_id_kunjungan_pengirim: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rkun_inap: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      rkun_baru_lama: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      rkun_biaya_kartu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      rkun_id_rkun_awal: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      rkun_terkunci: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      rkun_terkunci_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rkun_terkunci_nomor: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rkun_nama_pasienluar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rkun_png_noncash: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rkun_png_noncash_id_klausul: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      rkun_batal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rkun_batal_alasan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rkun_waktu_daftarulang: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rkun_stat_waktudatamasuk: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rkun_stat_waktudatamasuk_nextprocess: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rkun_stat_member: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rkun_id_jenis_daftar: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      rkun_id_rkun_via: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      rkun_alamat_pasienluar: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rkun_tgllahir_pasienluar: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rkun_jnskel_pasienluar: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      rkun_struk_antri_sdh_cetak: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rkun_reservasi: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rkun_terkunci_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rkun_terkunci_peg_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      is_bpjs: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      is_lansia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rkun_konsul: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      rkun_ktp_pasienluar: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      rkun_pasport_pasienluar: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      rkun_sim_pasienluar: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      rkun_jenis_identitas_pasien_luar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "lihat tabel asp_ref_jenis_kartu_identitas",
      },
    },
    {
      sequelize,
      tableName: "rencana_kunjungan",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "renc_kunj_id_ulay_25_id_ps",
          fields: [{ name: "rkun_id_layanan" }, { name: "rkun_id_pasien" }],
        },
        {
          name: "renc_kunj_id_ulay_id_ps",
          fields: [{ name: "rkun_id_layanan" }, { name: "rkun_id_pasien" }],
        },
        {
          name: "renc_kunj_rkun_awal",
          fields: [{ name: "rkun_id_rkun_awal" }],
        },
        {
          name: "rencana_kunjungan_inacbg_rajal",
          fields: [{ name: "rkun_png_noncash" }],
        },
        {
          name: "rencana_kunjungan_pkey",
          unique: true,
          fields: [{ name: "rkun_id" }],
        },
        {
          name: "rencana_kunjungan_rkun_id_layanan52",
          fields: [{ name: "rkun_id_layanan" }],
        },
        {
          name: "rencana_kunjungan_rkun_id_pasien",
          fields: [{ name: "rkun_id_pasien" }],
        },
        {
          name: "rencana_kunjungan_rkun_id_pasien_rkun_tgl_daftar",
          fields: [{ name: "rkun_id_pasien" }, { name: "rkun_tgl_daftar" }],
        },
        {
          name: "rencana_kunjungan_rkun_id_pasien_rkun_tgl_daftar_rkun_inap",
          fields: [
            { name: "rkun_id_pasien" },
            { name: "rkun_inap" },
            { name: "rkun_tgl_daftar" },
          ],
        },
        {
          name: "rencana_kunjungan_rkun_id_rkun_png_noncash",
          fields: [{ name: "rkun_id" }, { name: "rkun_png_noncash" }],
        },
        {
          name: "rencana_kunjungan_rkun_id_rkun_png_noncash_id_klausul",
          fields: [
            { name: "rkun_id" },
            { name: "rkun_png_noncash_id_klausul" },
          ],
        },
        {
          name: "rencana_kunjungan_rkun_inap",
          fields: [{ name: "rkun_inap" }],
        },
        {
          name: "rencana_kunjungan_rkun_inap_true",
          fields: [{ name: "rkun_inap" }],
        },
        {
          name: "rencana_kunjungan_rkun_png_noncash_key",
          fields: [{ name: "rkun_png_noncash" }],
        },
        {
          name: "rencana_kunjungan_rkun_rajal",
          fields: [{ name: "rkun_inap" }],
        },
        {
          name: "rencana_kunjungan_rkun_tgl_daftar",
          fields: [{ name: "rkun_tgl_daftar" }],
        },
        {
          name: "rencana_kunjungan_rkun_tgl_daftar_rkun_inap",
          fields: [{ name: "rkun_tgl_daftar" }, { name: "rkun_inap" }],
        },
        {
          name: "rencana_kunjungan_rkun_tgl_visit",
          fields: [{ name: "rkun_tgl_visit" }],
        },
        {
          name: "rencana_kunjungan_rkun_waktu",
          fields: [{ name: "rkun_waktu" }],
        },
      ],
    }
  );

  rencanaKunjungan.associate = function (models) {
    // associations can be defined here
    rencanaKunjungan.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "rkun_id_layanan",
      as: "layanan",
    });
    rencanaKunjungan.hasOne(models.refpoli_bpjs, {
      foreignKey: "kd_layananpoli_rsc",
      sourceKey: "rkun_id_layanan",
      as: "poli_bpjs",
    });
    rencanaKunjungan.hasOne(models.asp_penanggung, {
      foreignKey: "png_id",
      sourceKey: "rkun_png_noncash",
      as: "penanggung",
    });
    rencanaKunjungan.hasOne(models.dokter_bpjs, {
      foreignKey: "dr_bpjs_id_peg",
      sourceKey: "rkun_id_dokter",
      as: "dokter_bpjs",
    });
    rencanaKunjungan.hasMany(models.dokter_bpjs, {
      foreignKey: "dr_bpjs_id_peg",
      sourceKey: "rkun_id_dokter",
      as: "many_dokter_bpjs",
    });
    rencanaKunjungan.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "rkun_id_dokter",
      as: "dokter",
    });
    rencanaKunjungan.hasOne(models.asp_pasien, {
      foreignKey: "ps_id",
      sourceKey: "rkun_id_pasien",
      as: "asp_pasien",
    });
    rencanaKunjungan.hasOne(models.jml_nelp, {
      foreignKey: "rkunid",
      sourceKey: "rkun_id",
      as: "jml_nelp",
    });
    rencanaKunjungan.hasMany(models.trx_midtrans, {
      foreignKey: "trx_mt_rkun_id",
      sourceKey: "rkun_id",
      as: "midtrans",
    });
    rencanaKunjungan.hasOne(models.foto_dokter, {
      foreignKey: "peg_id",
      sourceKey: "rkun_id_dokter",
      as: "foto_dokter",
    });
    rencanaKunjungan.hasMany(models.billing, {
      foreignKey: "bill_id_rkun",
      sourceKey: "rkun_id",
      as: "billing",
    });
    rencanaKunjungan.hasOne(models.ihs_pasien, {
      foreignKey: "ps_id",
      sourceKey: "rkun_id_pasien",
      as: "ihs_pasien",
    });
    rencanaKunjungan.hasOne(models.ihs_practioner, {
      foreignKey: "peg_id",
      sourceKey: "rkun_id_dokter",
      as: "ihs_practioner",
    });
    rencanaKunjungan.hasOne(models.ihs_layanan_location, {
      foreignKey: "ref_layanan_id",
      sourceKey: "rkun_id_layanan",
      as: "ihs_layanan_location",
    });
    rencanaKunjungan.hasOne(models.ihs_encounter, {
      foreignKey: "rkun_id",
      sourceKey: "rkun_id",
      as: "ihs_encounter",
    });

  };
  return rencanaKunjungan;
};
