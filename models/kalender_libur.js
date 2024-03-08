const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kalender_libur', {
    kal_libur_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kal_libur_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    kal_libur_ket: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kalender_libur',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "kalender_libur_pkey",
        unique: true,
        fields: [
          { name: "kal_libur_id" },
        ]
      },
    ]
  });
};
