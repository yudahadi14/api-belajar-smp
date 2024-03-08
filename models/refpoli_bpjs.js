const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const PoliBPJS =  sequelize.define('refpoli_bpjs', {
    id_refpoli: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kdpoli: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nmpoli: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kd_layananpoli_rsc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_kontrol_inap: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    nmpoli_rsc: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'refpoli_bpjs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "refpoli_bpjs_pkey",
        unique: true,
        fields: [
          { name: "id_refpoli" },
        ]
      },
    ]
  });
  PoliBPJS.associate = function (models) {
    PoliBPJS.hasOne(models.ref_layanan, {
      foreignKey: "ref_layanan_id",
      sourceKey: "kd_layananpoli_rsc",
      as: "ref_layanan",
    });
  };
  return PoliBPJS;
};
