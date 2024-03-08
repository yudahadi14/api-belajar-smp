const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jnspeserta_bpjs', {
    kd_jnspeserta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ketjnspeserta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kdjnsbantuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kd_penanggung: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jnspeserta_bpjs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jnspeserta_bpjs_pkey",
        unique: true,
        fields: [
          { name: "kd_jnspeserta" },
        ]
      },
    ]
  });
};
