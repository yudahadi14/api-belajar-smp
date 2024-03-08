const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registrasi_bayi', {
    reg_bayi_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reg_bayi_ps_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reg_bayi_nomor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_jam_lahir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_berat_badan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_panjang_badan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_kelahiran: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: "jika true maka lahir tunggal"
    },
    reg_bayi_kelahiran_ke: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_jenis_kelahiran: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: "jika true maka lahir normal"
    },
    reg_bayi_kelainan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_mr_ibu: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "NULL"
    },
    reg_bayi_kelahiran_dgn_tindakan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "kelahiran dengan tindakan"
    },
    reg_bayi_id_dokter_obgyn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_bayi_dokter_anak: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_bayi_perawat_yg_telp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_ruangan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_id_peg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reg_bayi_ket: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_waktu_input: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_bayi_nama: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    reg_bayi_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    finish: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "true jika sudah selesai"
    },
    reg_bayi_diambil_oleh: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_telp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_petugas_serah: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_bayi_tgl_serah: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_bayi_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    reg_bayi_hari: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_no_ktp_ayah: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reg_pekerjaan_ayah: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registrasi_bayi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "registrasi_bayi_pkey",
        unique: true,
        fields: [
          { name: "reg_bayi_id" },
        ]
      },
    ]
  });
};
