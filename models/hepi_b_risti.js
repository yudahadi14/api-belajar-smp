const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hepi_b_risti', {
    hepi_b_risti_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hepi_b_risti_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_nik: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_nama_lengkap: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_status_pernikahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_status_gpa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_alamat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_nomor_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_pendidikan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_pekerjaan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_nomor_kartu_keluarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hepi_b_risti_tanggal_skrining_hbsag: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_kode_spesimen_hbsag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_hasil_skrining_hbsag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_wilayah_kerja: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_kode_propinsi_pasien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hepi_b_risti_kode_kabupaten_pasien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hepi_b_risti_kode_kelurahan_pasien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hepi_b_risti_propinsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_kelompok_risiko: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_pernah_imunisasi_hepatitis_b: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_hepb_dalam_keluarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_hepb_hubungan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_hepb_rujuk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_konseling_hepb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_pemeriksaan_anti_hbs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tanggal_pemeriksaan_anti_hbs: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_kode_spesimen_anti_hbs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_hasil_pemeriksaan_anti_hbs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tindak_lanjut_imunisasi_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tanggal_tindak_lanjut_imunisasi_1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_tindak_lanjut_imunisasi_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tanggal_tindak_lanjut_imunisasi_2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_tindak_lanjut_imunisasi_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_tanggal_tindak_lanjut_imunisasi_3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hepi_b_risti_data_aksi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hepi_b_risti_screening_triple_eliminasi: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hepi_b_risti',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "hepi_b_risti_pkey",
        unique: true,
        fields: [
          { name: "hepi_b_risti_id" },
        ]
      },
    ]
  });
};
