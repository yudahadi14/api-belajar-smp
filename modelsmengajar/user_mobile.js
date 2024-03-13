const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_mobile', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_nama: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_notlp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_tgldaftar: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    user_pin: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_mobile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_user_mobile",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
