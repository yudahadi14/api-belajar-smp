const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quota_pasien_poli', {
    id_quota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jml_quota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quota_id_layanan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quota_tgl_visit: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    quota_all_tgl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    quota_all_poli: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    hari: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    jamke1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jamke2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intervaljam: {
      type: DataTypes.TIME,
      allowNull: true
    },
    intervaljam2: {
      type: DataTypes.TIME,
      allowNull: true
    },
    jambuka: {
      type: DataTypes.TIME,
      allowNull: true
    },
    interv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jamke3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jamke4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jamke5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jamke6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wktkunjung: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quota_pasien_poli',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "quota_pasien_poli_pkey",
        unique: true,
        fields: [
          { name: "id_quota" },
        ]
      },
    ]
  });
};
