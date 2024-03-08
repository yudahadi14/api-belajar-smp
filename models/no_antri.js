const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('no_antri', {
    id_antri: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tgl_no_antri: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ps_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id_kasir: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sudah_dipanggil: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    waktu_mulai: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    waktu_akhir: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    no_umum: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    no_asuransi: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    no_all: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id_layanan: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_umum: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reset: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    no_verifikator: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    is_verifikator: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_asuransi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    group_antri: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1=apt nonbpjs,2=apt bpjs,3=apt verifikator,4=apt raciknon bpjs,5=apt racik bpjs,6=group nomor untuk poli,7=apt lansia,8=apt lansia racik,9=apt nomor diantar,10=igdcito\n\n\/\/UNTUK RADIOLOGI\n1=apt nonbpjs=USG\n2=apt bpjs=PENGAMBILAN HASIL\/JADWAL\n4=apt raciknon bpjs=KONVEN\n5=apt racik bpjs= DR\n7=apt lansia=GERIATRI\n8=apt lansia racik=CT\n\n\/\/untuk loket\n6=manual\n7=LANSIA\n8=IBU HAMIL\n9=ANAK\n"
    },
    is_raciknonbpjs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_racikbpjs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    no_raciknonbpjs: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    no_racikbpjs: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    panggil_ulang: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    is_ulang: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    waktu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rkunid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    no_loket_jambu: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id_loket: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_ulang_kasir: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dipanggil_kasir: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    panggil_ulang_kasir: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    waktu_mulai_kasir: {
      type: DataTypes.DATE,
      allowNull: true
    },
    waktu_akhir_kasir: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_bpjs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_lansia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    no_lansiaapt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    no_raciklansiaapt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    no_obatantar: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    no_igdcitoapt: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'no_antri',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "no_all_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "ps_id" },
          { name: "no_all" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_antri_group_antri",
        fields: [
          { name: "group_antri" },
        ]
      },
      {
        name: "no_antri_group_antri1",
        fields: [
          { name: "group_antri" },
          { name: "is_ulang" },
          { name: "reset" },
          { name: "no_umum" },
        ]
      },
      {
        name: "no_antri_group_antri1_39",
        fields: [
          { name: "id_layanan" },
          { name: "group_antri" },
          { name: "is_ulang" },
          { name: "reset" },
          { name: "no_umum" },
        ]
      },
      {
        name: "no_antri_group_antri2",
        fields: [
          { name: "no_asuransi" },
          { name: "is_ulang" },
          { name: "reset" },
          { name: "group_antri" },
        ]
      },
      {
        name: "no_antri_group_antri6",
        fields: [
          { name: "no_all" },
          { name: "sudah_dipanggil" },
          { name: "group_antri" },
          { name: "reset" },
        ]
      },
      {
        name: "no_antri_id_kasir",
        fields: [
          { name: "id_kasir" },
        ]
      },
      {
        name: "no_antri_id_layanan",
        fields: [
          { name: "id_layanan" },
        ]
      },
      {
        name: "no_antri_is_asuransi",
        fields: [
          { name: "is_asuransi" },
        ]
      },
      {
        name: "no_antri_is_racikbpjs",
        fields: [
          { name: "is_racikbpjs" },
        ]
      },
      {
        name: "no_antri_is_raciknonbpjs",
        fields: [
          { name: "is_raciknonbpjs" },
        ]
      },
      {
        name: "no_antri_is_ulang",
        fields: [
          { name: "is_ulang" },
        ]
      },
      {
        name: "no_antri_is_umum",
        fields: [
          { name: "is_umum" },
        ]
      },
      {
        name: "no_antri_is_verifikator",
        fields: [
          { name: "is_verifikator" },
        ]
      },
      {
        name: "no_antri_no_all",
        fields: [
          { name: "no_all" },
        ]
      },
      {
        name: "no_antri_no_asuransi",
        fields: [
          { name: "no_asuransi" },
        ]
      },
      {
        name: "no_antri_no_racikbpjs",
        fields: [
          { name: "no_racikbpjs" },
        ]
      },
      {
        name: "no_antri_no_raciknonbpjs",
        fields: [
          { name: "no_raciknonbpjs" },
        ]
      },
      {
        name: "no_antri_no_umum",
        fields: [
          { name: "no_umum" },
        ]
      },
      {
        name: "no_antri_no_verifikator",
        fields: [
          { name: "no_verifikator" },
        ]
      },
      {
        name: "no_antri_panggil_ulang",
        fields: [
          { name: "panggil_ulang" },
        ]
      },
      {
        name: "no_antri_pkey",
        unique: true,
        fields: [
          { name: "id_antri" },
        ]
      },
      {
        name: "no_antri_ps_id",
        fields: [
          { name: "ps_id" },
        ]
      },
      {
        name: "no_antri_reset",
        fields: [
          { name: "reset" },
        ]
      },
      {
        name: "no_antri_sudah_dipanggil",
        fields: [
          { name: "sudah_dipanggil" },
        ]
      },
      {
        name: "no_antri_tgl_no_antri",
        fields: [
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_antri_waktu_akhir",
        fields: [
          { name: "waktu_akhir" },
        ]
      },
      {
        name: "no_antri_waktu_mulai",
        fields: [
          { name: "waktu_mulai" },
        ]
      },
      {
        name: "no_asuransi_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_asuransi" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_igdcitoapt_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_igdcitoapt" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_lansiaapt_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_lansiaapt" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_obatantar_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_obatantar" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_racikbpjs_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_racikbpjs" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_raciklansiaapt_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_raciklansiaapt" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_raciknonbpjs_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_raciknonbpjs" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_umum_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_umum" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
      {
        name: "no_verifikator_no_antri_uniqe_idx",
        unique: true,
        fields: [
          { name: "no_verifikator" },
          { name: "id_layanan" },
          { name: "waktu" },
          { name: "tgl_no_antri" },
        ]
      },
    ]
  });
};
