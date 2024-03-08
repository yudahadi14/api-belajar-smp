const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Pasien = sequelize.define(
    "v_pasien",
    {
      ps_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        primaryKey: true,
      },
      ps_mrn: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      ps_tgldaftarawal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ps_id_layananawal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ps_namalengkap: {
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
    },
    {
      sequelize,
      tableName: "v_pasien",
      schema: "public",
      timestamps: false,
    }
  );
  Pasien.associate = function (models) {
    // associations can be defined here

    Pasien.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "ps_id_layananawal",
      as: "layanan_awal",
    });
  };
  return Pasien;
};
