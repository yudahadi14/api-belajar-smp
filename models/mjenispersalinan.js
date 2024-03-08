const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mjenispersalinan', {
    jenispersalinan: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    useridentry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateentry: {
      type: DataTypes.DATE,
      allowNull: false
    },
    useridedit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateedit: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jenispersalinanid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'mjenispersalinan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mjenispersalinan_pk",
        unique: true,
        fields: [
          { name: "jenispersalinanid" },
        ]
      },
    ]
  });
};
