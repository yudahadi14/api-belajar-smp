const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mfingerspot', {
    fingerspotid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fingerspotdn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fingerspotsn: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fingerspotvc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fingerspotac: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fingerspotvkey: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userentry: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dateentry: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'mfingerspot',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mfingerspot_pk",
        unique: true,
        fields: [
          { name: "fingerspotid" },
        ]
      },
    ]
  });
};
