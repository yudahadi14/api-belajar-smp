const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const files = sequelize.define('trx_files', {
    file_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "trx_files_un"
    },
    file_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file_root_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trx_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_files_pk",
        unique: true,
        fields: [
          { name: "file_id" },
        ]
      },
      {
        name: "trx_files_un",
        unique: true,
        fields: [
          { name: "file_name" },
        ]
      },
    ]
  });
  files.associate = function (models) {
    // associations can be defined here
    files.hasMany(models.trx_files, {
      foreignKey: "file_root_id",
      sourceKey: "file_id",
      as: "children",
    });
  };
  return files;

};
