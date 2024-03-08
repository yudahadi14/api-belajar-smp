const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asesmen_awal_rajal', {
    assmn_awl_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    assmn_awl_id_kun: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assmn_awl_rjl_tgl_masuk: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assmn_awl_rjl_dd_dtng: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_dd_stts_byr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_dd_diambil_dri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_dd_kluhan_utama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_dd_riwayat_pnykit_skrng: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_riwayat_pnykit_dahulu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_riwayat_operasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_alergi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_pnyakit_keluarga: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_pnggunaan_obat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_rk_riwayat_lain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_kesadaran: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_gcs_e: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_gcs_m: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_gcs_v: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_tknan_drah: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_tknan_drah_2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_suhu: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_nadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_napas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_bb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pf_tb: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    assmn_awl_rjl_pes_psklogis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_hbng_psn_dgn_klrga: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_suku: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_bhasa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_pndidikn: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_pkrjaan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_sosial_eknmi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_agama: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_kykinan_nlai_pribdi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_rasa_nyeri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_onset: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_provokating: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_quality: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_region_lokasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_region_ket: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_severity_skor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_severity_ket: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_treatment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_understanding: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sf_alat_bantu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sf_catat_tubuh: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skr_cra_brjlan_pasien: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skr_pasien_akan_duduk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skr_hasil: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skn_pasien_penurunan_bb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assmn_awl_rjl_skn_turun_bb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assmn_awl_rjl_skn_asupan_mkan_pasien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assmn_awl_rjl_ke_bicara: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_ke_pnterjemah: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_ke_bhs_isyarat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_ke_materi_edukasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_mk_mslah_kprawatan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_ranap: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    assmn_awl_rjl_ke_edukasi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peg_input: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wktu_input: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assmn_awl_rjl_rk_alergi_reaksi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_sn_rasa_nyeri_ket: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skn_gizi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_isform: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peg_input_update: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wktu_input_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assmn_awl_rjl_vod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_vos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_tiod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_tios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_r_sph_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_r_cyl_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_r_axis_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_l_sph_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_l_cyl_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_l_axis_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_add_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_r_visus_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_l_visus_kclm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_isbatal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    assmn_awl_rjl_pes_mental: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_dekubitus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pes_tt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_pf_fungsional: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_skn_skor4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assmn_awl_rjl_isbdn36: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    assmn_awl_rjl_bdn_notice: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asesmen_awal_rajal',
    schema: 'public',
    timestamps: false
  });
};
