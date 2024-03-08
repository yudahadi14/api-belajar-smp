const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_maintenance', {
    mntce_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mntce_app_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mntce_issuer: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mntce_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mntce_subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mntce_desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mntce_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mntce_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mntce_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_maintenance',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_maintenance_pk",
        unique: true,
        fields: [
          { name: "mntce_id" },
        ]
      },
    ]
  });
};
