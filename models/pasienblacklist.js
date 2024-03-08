const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pasienblacklist', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id_ps: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nik: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    no_bpjs: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    peg_input: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    no_sk: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    alasan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    batal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    alasan_batal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wkt_input: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'pasienblacklist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "blacklistpasien_id_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
