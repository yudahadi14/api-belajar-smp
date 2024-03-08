const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const AspPasien = sequelize.define(
    "asp_pasien",
    {
      ps_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      ps_namalengkap: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ps_title_depan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_title_belakang: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_namapanggil: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_namaibu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_jeniskelamin: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_tempatlahir: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_tgllahir: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ps_id_statusnikah: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_alamat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_propinsi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_kota_kab: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_kecamatan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_kelurahan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_kodepos: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_telpon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_golongandarah: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      ps_rhesus_darah: {
        type: DataTypes.STRING(2),
        allowNull: true,
      },
      ps_id_pend: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_id_warganegara: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_id_agama: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_suku: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_nama_hub_darurat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_alamat_hub_darurat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_telpon_hub_darurat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_stat_thd_parent: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_nomor_identitas: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_jenis_nomor_identitas: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      ps_id_png_cash: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ps_id_png_non_cash: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ps_tgl_mulai_png: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ps_tgl_akhir_png: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ps_no_jmn_non_cash: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_namasuamiistri: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_pekerjaan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_waktu_input: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      ps_peg_nama_input: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_peg_id_input: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ps_peg_nama_update: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_peg_id_update: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ps_ket: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_suami: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ps_id_bahasa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ps_tb_ro: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ps_pegawai_rs: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ps_alamat_ktp: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ps_alamat_sama: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ps_pegawai_relawan_rs: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "asp_pasien",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "asp_pasien_pkey",
          unique: true,
          fields: [{ name: "ps_id" }],
        },
        {
          name: "asp_pasien_ps_id_ps_namalengkap",
          fields: [{ name: "ps_id" }, { name: "ps_namalengkap" }],
        },
        {
          name: "asp_pasien_ps_namaibu",
          fields: [{ name: "ps_namaibu" }],
        },
        {
          name: "asp_pasien_ps_namalengkap",
          fields: [{ name: "ps_namalengkap" }],
        },
        {
          name: "asp_pasien_ps_no_jmn_non_cash",
          fields: [{ name: "ps_no_jmn_non_cash" }],
        },
        {
          name: "asp_pasien_ps_no_jmn_non_cash2",
          fields: [{ name: "ps_no_jmn_non_cash" }],
        },
        {
          name: "asp_pasien_ps_tgllahir",
          fields: [{ name: "ps_tgllahir" }],
        },
        {
          name: "asp_pasien_ps_tgllahir_umur",
          fields: [],
        },
      ],
    }
  );
  AspPasien.associate = function (models) {
    // associations can be defined here
    AspPasien.hasOne(models.pasien, {
      foreignKey: "ps_id",
      sourceKey: "ps_id",
      as: "pasien",
    });
    AspPasien.hasOne(models.ihs_pasien, {
      foreignKey: "ps_id",
      sourceKey: "ps_id",
      as: "ihs_pasien",
    });
  };

  return AspPasien;
};
