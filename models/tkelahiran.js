const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const tKelahiran = sequelize.define(
    "tkelahiran",
    {
      kelahiranid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      mrnibu: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      mrnanak: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      kelahirantgl: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      kelahiranwaktu: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      kelahirankelamin: {
        type: DataTypes.STRING(1),
        allowNull: true,
      },
      kelahiranbb: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kelahiranpb: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jenispersalinanid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kelahiransuamike: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kelahirananakke: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kelahiranperawat: {
        type: DataTypes.STRING(128),
        allowNull: true,
      },
      kelahiranttdperawat: {
        type: DataTypes.STRING(512),
        allowNull: true,
      },
      kelahirandpjp: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      kelahiranttddpjp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pkunid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      fingerid1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fingerid2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      namabayi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahiranpetugasmr: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ktpibu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamatibu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pekerjaanibu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      namaayah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ktpayah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pekerjaanayah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamatayah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      namaibu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      usereditor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahirannormal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelainanbawaan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahiranjumlahbayi: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      lfootfilename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rfootfilename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kodelfoot: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: "tkelahiran_un",
      },
      koderfoot: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: "tkelahiran_un",
      },
      kelahirandpjpnama: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahirantunggal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      kelahiranstatus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "1. menunggu perawat 2. menunggu mr 3. menunggu dokter",
      },
      skllocked: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalcopy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      dateentry: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      noteperawat: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ismeninggal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      noregistrasi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dokteranak: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ruangan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      namadokteranak: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahiranpsid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      ismeninggal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ismeninggal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      noregistrasi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tkelahiran",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "pk_tkelahiran",
          unique: true,
          fields: [{ name: "kelahiranid" }],
        },
        {
          name: "tkelahiran_un",
          unique: true,
          fields: [{ name: "kodelfoot" }, { name: "koderfoot" }],
        },
      ],
    }
  );
  tKelahiran.associate = function (models) {
    tKelahiran.hasOne(models.mjenispersalinan, {
      foreignKey: "jenispersalinanid",
      sourceKey: "jenispersalinanid",
      as: "jenis_persalinan",
    });
    tKelahiran.hasMany(models.requestskl, {
      foreignKey: "kelahiranid",
      sourceKey: "kelahiranid",
      as: "request",
    });
  };
  return tKelahiran;
};
