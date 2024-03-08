const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_ubah_activenonactive_poli', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hari: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id_poli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tgl_nonactive: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updater: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'history_ubah_activenonactive_poli',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "history_ubah_activenonactive_poli_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
