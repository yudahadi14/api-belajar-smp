const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mfingerspotuser', {
    fingerspotuserid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userentry: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dateentry: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    fingerspotcode: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "mfingerspotusercode_un"
    }
  }, {
    sequelize,
    tableName: 'mfingerspotuser',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mfingerspotuser_pk",
        unique: true,
        fields: [
          { name: "fingerspotuserid" },
        ]
      },
      {
        name: "mfingerspotusercode_un",
        unique: true,
        fields: [
          { name: "fingerspotcode" },
        ]
      },
    ]
  });
};
