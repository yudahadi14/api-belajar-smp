const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const trxJantung = sequelize.define('trx_jantung_upload', {
    jantung_upl_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rkun_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    files_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: Sequelize.Sequelize.fn("now"),
    },
    diagnosa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_telp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tgl_tindakan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ps_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

  }, {
    sequelize,
    tableName: 'trx_jantung_upload',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_jantung_upload_pk",
        unique: true,
        fields: [
          { name: "jantung_upl_id" },
        ]
      },
    ]
  });
  trxJantung.associate = function (models) {
    // associations can be defined here
    trxJantung.hasOne(models.trx_files, {
      foreignKey: "file_id",
      sourceKey: "files_id",
      as: "file",
    });
    trxJantung.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "updated_by",
      as: "updator",
    });
    trxJantung.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "created_by",
      as: "creator",
    });

  };
  return trxJantung
};
