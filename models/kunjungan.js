const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  let Kunjungan = sequelize.define(
    "kunjungan",
    {
      kun_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      kun_id_layanan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kun_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      kun_id_waktu: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kun_id_pasien: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      kun_id_dokter: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kun_id_rencana_kunjungan: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      kun_inap: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      kun_baru_lama: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      kun_tervalidasi: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kun_tglvalidasi: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      kun_pegvalidasi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kun_diproses: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kun_jamvalidasi: {
        type: DataTypes.TIME,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      kun_id_peg_inputubah: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      kun_waktu_input: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      kun_emergency: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kun_id_png_noncash: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      kun_id_png_noncash_klausul: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      kun_inap_pulang: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kun_inap_batal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kun_jamdiproses: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      kun_rajal_pulang: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kun_ket_rujuk_lain: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kun_ket_rujuk_balik: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kun_ket_nolak_rawat: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kun_ket_rujuk_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      kun_ket_ugd_keluar_trp_ket: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kun_ket_ugd_keluar_paps_ket: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      kun_ket_ugd_keluar_meninggal_ket: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      // kun_id_perawat_kunci: {
      //   type: DataTypes.BIGINT,
      //   allowNull: true
      // },
      kun_ket_ugd_keluar_rujuk_ket: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "kunjungan",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "kunjungan__kun_tgl",
          fields: [{ name: "kun_tgl" }],
        },
        {
          name: "kunjungan_id_pasien",
          fields: [{ name: "kun_id_pasien" }],
        },
        {
          name: "kunjungan_kun_diproses_null_tervalidasi_true",
          fields: [{ name: "kun_diproses" }, { name: "kun_tervalidasi" }],
        },
        {
          name: "kunjungan_kun_id_dokter",
          fields: [{ name: "kun_id_dokter" }],
        },
        {
          name: "kunjungan_kun_id_kun_id_rencana_kunjungan",
          fields: [{ name: "kun_id" }, { name: "kun_id_rencana_kunjungan" }],
        },
        {
          name: "kunjungan_kun_id_layanan",
          fields: [{ name: "kun_id_layanan" }],
        },
        {
          name: "kunjungan_kun_id_rencana_kunjungan",
          fields: [{ name: "kun_id_rencana_kunjungan" }],
        },
        {
          name: "kunjungan_kun_id_waktu",
          fields: [{ name: "kun_id_waktu" }],
        },
        {
          name: "kunjungan_kun_id_waktu_kun_id_layanan",
          fields: [{ name: "kun_id_waktu" }, { name: "kun_id_layanan" }],
        },
        {
          name: "kunjungan_kun_inap",
          fields: [{ name: "kun_inap" }],
        },
        {
          name: "kunjungan_kun_inap_kun_id_layanan",
          fields: [{ name: "kun_inap" }, { name: "kun_id_layanan" }],
        },
        {
          name: "kunjungan_kun_inap_kun_id_pasien",
          fields: [{ name: "kun_inap" }, { name: "kun_id_pasien" }],
        },
        {
          name: "kunjungan_kun_inap_not_true",
          fields: [{ name: "kun_inap" }],
        },
        {
          name: "kunjungan_kun_inap_true",
          fields: [{ name: "kun_inap" }],
        },
        {
          name: "kunjungan_kun_tgl_kun_id_pasien",
          fields: [{ name: "kun_tgl" }, { name: "kun_id_pasien" }],
        },
        {
          name: "kunjungan_kun_tgl_kun_inap_kun_id_layanan",
          fields: [
            { name: "kun_tgl" },
            { name: "kun_inap" },
            { name: "kun_id_layanan" },
          ],
        },
        {
          name: "kunjungan_pkey",
          unique: true,
          fields: [{ name: "kun_id" }],
        },
      ],
    }
  );
  Kunjungan.associate = function (models) {
    // associations can be defined here
    Kunjungan.hasOne(models.asp_pasien, {
      foreignKey: "ps_id",
      sourceKey: "kun_id_pasien",
      as: "asp_pasien",
    });
    Kunjungan.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "kun_id_layanan",
      as: "layanan",
    });
    Kunjungan.hasOne(models.ihs_pasien, {
      foreignKey: "ps_id",
      sourceKey: "kun_id_pasien",
      as: "ihs_pasien",
    });
    Kunjungan.hasOne(models.ihs_practioner, {
      foreignKey: "peg_id",
      sourceKey: "kun_id_dokter",
      as: "ihs_practioner",
    });
    Kunjungan.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "kun_id_dokter",
      as: "pegawai",
    });
    Kunjungan.hasOne(models.ihs_layanan_location, {
      foreignKey: "ref_layanan_id",
      sourceKey: "kun_id_layanan",
      as: "ihs_layanan_location",
    });
    Kunjungan.hasMany(models.icd, {
      foreignKey: "icd_id_kunjungan",
      sourceKey: "kun_id",
      as: "icd",
    });
    Kunjungan.hasOne(models.rencana_kunjungan, {
      foreignKey: "rkun_id",
      sourceKey: "kun_id_rencana_kunjungan",
      as: "rencana_kunjungan",
    });
    Kunjungan.hasOne(models.asesmen_awal_rajal, {
      foreignKey: "assmn_awl_id_kun",
      sourceKey: "kun_id",
      as: "asesmen_awal_rajal",
    });
    Kunjungan.hasOne(models.ihs_encounter, {
      foreignKey: "rkun_id",
      sourceKey: "kun_id_rencana_kunjungan",
      as: "ihs_encounter",
    });
    Kunjungan.hasOne(models.klinis_anamnesa_teks, {
      foreignKey: "kli_anam_tks_id_kun",
      sourceKey: "kun_id",
      as: "klinis_anamnesa_teks",
    });
  };
  return Kunjungan;
};
