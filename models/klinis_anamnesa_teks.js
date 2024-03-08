const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klinis_anamnesa_teks', {
    kli_anam_tks_id_layanan: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kli_anam_tks_id_dokter: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    kli_anam_tks_id_kun: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    kli_anam_tks_anamnesa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_lastupdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    kli_anam_tks_anamnesa_berat: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Kg"
    },
    kli_anam_tks_anamnesa_diastole: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "berapa mm\/Hg"
    },
    kli_anam_tks_anamnesa_sistole: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "mm\/Hg"
    },
    kli_anam_tks_anamnesa_tinggi: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "centimeter (cm)"
    },
    kli_anam_tks_anamnesa_suhu: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "derajat celcius"
    },
    kli_anam_tks_anamnesa_nadi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "berapa kali\/menit"
    },
    kli_anam_tks_id_peg_input: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_nama_peg_input: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_timeupdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    kli_anam_tks_anamnesa_alergi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    kli_anam_tks_anamnesa_alergi_ket: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_nyeri: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    kli_anam_tks_anamnesa_nyeri_skor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_anamnesa_nyeri_lok: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_jatuh: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    kli_anam_tks_anamnesa_jatuh_skor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_anamnesa_gizi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_psikologis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_psikologis_lain: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_hambatanedukasi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_he_bahasa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_he_cacat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_anamnesa_edukasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_anamnesa_validasi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    kli_anam_tks_anamnesis_dok: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_diagnosis_dok: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_terapi_dok: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_anamnesis_id_peg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_keluhan_utama_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_riwayat_peny_skrg_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_sedang_haid_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_telat_haid_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_hpht_igd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kli_anam_tks_riwayat_penya_dulu_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_riwayat_alergi_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_triase_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_skor_nyeri_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_keadaan_umum_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_kesadaran_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_gcs_e_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_gcs_m_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_gcs_v_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_stat_psikologis_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_stat_sos_ekonomi_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_stat_nutrisi_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_breathing_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_airway_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_airway_sumbatan_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_circulation_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_circulation_hasil_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_pf_kepala_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_pf_mata_cekung_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_pupil_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_pf_isokor_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_pf_mata_diameter_ka_igd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    kli_anam_tks_pf_mata_diameter_kiri_igd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    kli_anam_tks_pf_reflek_cahaya_kanan_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_pf_reflek_cahaya_kiri_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_pf_tht_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_pf_thorax_asimetris_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_pf_text_tak_asimetris_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_pf_bunyi_jantung_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_pf_murmur_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_gallop_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_abdomen_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_pf_ekstremitas_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_pf_lainnya_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_diagnosa_utama_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_diagnosa_sekunder_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_penatalaksana_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_kembali_tgl_igd: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    kli_anam_tks_kontrol_kepoli_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_indikasi_rawat_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_kondisi_akhir_tgl_igd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_kondisi_akhir_kesadaran_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_kondisi_akhir_keadaan_umum_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_td_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_n_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_s_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_p_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_keluar_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_keluar_catatan_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_deskripsi_luka_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_konsul_dokter_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_tgl_konsul_dokter_igd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_id_dokter_yang_dikonsul_igd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_advis_igd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_valid_data_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_valid_data_waktu_igd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_fisik_dok: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_anamnesa_napas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_pf_paru_ronkhi_ka_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_paru_ronkhi_kiri_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_wheezing_ka_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_pf_wheezing_kiri_igd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_tipe_ronkhi_igd: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kli_anam_tks_id_ruang_rawat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_id_ket_meninggal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_id_dokter_validasi_ases: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_jam_periksa_dokter: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_asesmen_igd_dari: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_skrining_pasien: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2
    },
    kli_anam_tks_riwayat_alergi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    kli_anam_tks_anemis: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    kli_anam_tks_edukasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_tgl_asesmen_selesai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_advis_selesai: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_advis_selesai_oleh_dokter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kli_anam_tks_pilihan_napas_spontan: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    kli_anam_tks_terapi_dok_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_fisik_dok_s: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kli_anam_tks_id_soap_ugd: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kli_anam_tks_timeinsert: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kli_anam_tks_diet: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'klinis_anamnesa_teks',
    schema: 'public',
    timestamps: false
  });
};
