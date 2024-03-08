const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Pegawai = sequelize.define(
    "pegawai",
    {
      peg_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      peg_nopeg: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      peg_nama: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      peg_username: {
        type: "NAME",
        allowNull: false,
      },
      golongan: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      peg_nopekerja: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      peg_status_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      peg_status_nikah: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      peg_aktif: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      peg_tidak_aktif_sejak: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      peg_passwd: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      peg_bendahara_kasir: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      peg_dokter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      peg_id_hp: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      islogin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      tgl_update: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      peg_ktp: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
      peg_ihs_practioner_id: {
        type: DataTypes.STRING(32),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "pegawai",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "pegawai_pkey",
          unique: true,
          fields: [{ name: "peg_id" }],
        },
      ],
    }
  );
  Pegawai.associate = function (models) {
    // associations can be defined here

    Pegawai.hasOne(models.ihs_practioner, {
      foreignKey: "peg_id",
      sourceKey: "peg_id",
      as: "ihs_practioner",
    });
    Pegawai.hasOne(models.mst_firebase, {
      foreignKey: "peg_id",
      sourceKey: "peg_id",
      as: "firebase",
    });
    Pegawai.hasMany(models.pegawai_in_grup, {
      foreignKey: "peg_in_grp_id_peg",
      sourceKey: "peg_id",
      as: "in_grup",
    });
  };

  return Pegawai;
};
