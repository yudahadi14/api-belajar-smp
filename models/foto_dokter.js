const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foto_dokter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    peg_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "foto_dokter_un"
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'foto_dokter',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "foto_dokter_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "foto_dokter_un",
        unique: true,
        fields: [
          { name: "peg_id" },
        ]
      },
    ]
  });
};
