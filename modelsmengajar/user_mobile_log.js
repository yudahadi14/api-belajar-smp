const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_mobile_log', {
    user_log_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fk_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    date_expired_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_expired_otp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    kode_otp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    firebasetoken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jenisdokumen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'user_mobile_log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_user_mobile_log",
        unique: true,
        fields: [
          { name: "user_log_id" },
        ]
      },
    ]
  });
};
