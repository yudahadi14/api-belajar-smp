const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const dokterKoas = sequelize.define('dokter_koas', {
    dokter_koas_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    peg_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dokter_koas_klinik: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dokter_koas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dokter_koas_pk",
        unique: true,
        fields: [
          { name: "dokter_koas_id" },
        ]
      },
    ]
  });
  dokterKoas.associate = function (models) {
    // associations can be defined here
    dokterKoas.hasOne(models.foto_dokter, {
      foreignKey: "peg_id",
      sourceKey: "peg_id",
      as: "foto_dokter",
    });
    dokterKoas.hasOne(models.pegawai, {
      foreignKey: "peg_id",
      sourceKey: "peg_id",
      as: "pegawai",
    });
  };

  return dokterKoas;
};
