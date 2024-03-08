const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_api', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_api',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_api_id_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
