const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const antrianOperasi = sequelize.define(
    "antrian_operasi",
    {
      opr_antri_id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      opr_antri_id_pasien: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      opr_antri_tgl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      opr_antri_jam: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      opr_antri_poli_rujukan: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      opr_antri_ruangan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      opr_antri_diagnoza_rec: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      opr_antri_nurse_confirm: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_dpjp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      opr_antri_subj_clasifiv: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      opr_antri_tindakan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      opr_antri_waktu_input: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      opr_antri_lokasi_input: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      opr_antri_addrs_host_input: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      opr_antri_noantri: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      opr_antri_grupantri: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_id_inap_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      opr_antri_validasi_awal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      opr_antri_mode_revisi_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      opr_antri_mode_revisi_pegawai: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_validasi_akhir: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      opr_antri_revisi: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      opr_antri_sts_batal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      opr_antri_sts_batal_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      opr_antri_sts_batal_peg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_validasi_akhir_waktu: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      opr_antri_validasi_akhir_peg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_nurse_confirm_nama: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      opr_antri_sts_batal_alasan: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      opr_antri_validasi_akhir_waktu_jam: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      opr_antri_grup_day_antri: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      opr_antri_peg_dokter_operator: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_peg_dokter_anastesi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_tindakan_alatbahan: {
        type: DataTypes.STRING(1500),
        allowNull: true,
      },
      opr_antri_keterangan_satu: {
        type: DataTypes.STRING(3000),
        allowNull: true,
      },
      opr_antri_keterangan_dua: {
        type: DataTypes.STRING(3500),
        allowNull: true,
      },
      opr_antri_validasi_awal_waktu: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      opr_antri_validasi_awal_waktu_jam: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      opr_antri_peg_dokter_operator_dua: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_no_wa: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      opr_antri_id_rkun_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      opr_antri_noantri_bpjs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "antrian_operasi",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "antrian_operasi_pkey",
          unique: true,
          fields: [{ name: "opr_antri_id" }],
        },
      ],
    }
  );
  antrianOperasi.associate = function (models) {
    antrianOperasi.hasOne(models.asp_pasien, {
      foreignKey: "ps_id",
      sourceKey: "opr_antri_id_pasien",
      as: "pasien",
    });
    antrianOperasi.hasOne(models.inap, {
      foreignKey: "inap_id",
      sourceKey: "opr_antri_id_inap_id",
      as: "inap",
    });
    antrianOperasi.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "opr_antri_poli_rujukan",
      as: "layanan",
    });
    antrianOperasi.hasMany(models.refpoli_bpjs, {
      foreignKey: "kd_layananpoli_rsc",
      sourceKey: "opr_antri_poli_rujukan",
      as: "poli_bpjs",
    });
  };
  return antrianOperasi;
};
