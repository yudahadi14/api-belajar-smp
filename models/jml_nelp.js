const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const jmlNelp = sequelize.define(
    "jml_nelp",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      no_telp: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tgl: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      mrn: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      proses: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      rkunid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isi_sms: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      coding: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "Default_No_Compression",
      },
      reg: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      nmpasien: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      poli: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tglkunjung: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      noantri: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pesanfoot1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pesanfoot2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      nobpjs: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      session_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      trx_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notelpnonencrip: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      id_jns_app_layanan: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "1.inap 2.rajal 3.sms",
      },
      hari: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      is_lansia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      is_bpjs: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      kode: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      nm_dokter: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      statusid: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        comment:
          "//1 = masih dalam perjanjian, 2 = selesai / sudah cek in, 3 = batal",
      },
      kdpolibpjs: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      payid: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      no_rujukan: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      jeniskunjungan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      error_jkn: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      kdpoli_bpjs: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      no_surat_kontrol: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      kddokter_bpjs: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      jenis_reservasi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "jml_nelp",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "jml_nelp_mrn_idx",
          fields: [{ name: "mrn" }],
        },
        {
          name: "jml_nelp_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  jmlNelp.associate = function (models) {
    // associations can be defined here
    jmlNelp.hasOne(models.refpoli_bpjs, {
      foreignKey: "kdpoli",
      sourceKey: "kdpoli_bpjs",
      as: "poli_bpjs",
    });
    jmlNelp.hasOne(models.rencana_kunjungan, {
      foreignKey: "rkun_id",
      sourceKey: "rkunid",
      as: "rencana_kunjungan",
    });
    jmlNelp.hasMany(models.dokter_bpjs, {
      foreignKey: "dr_bpjs_kode_spec",
      sourceKey: "kdpoli_bpjs",
      as: "dokter_bpjs",
    });
  };
  return jmlNelp;
};
