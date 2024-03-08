const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tfingerspotfinger', {
    fingerid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fingerdata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateentry: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    userentry: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fingerspotuserid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tfingerspotfinger',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tfingerspotfinger_pk",
        unique: true,
        fields: [
          { name: "fingerid" },
        ]
      },
    ]
  });
};
