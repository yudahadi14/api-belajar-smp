const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihs_composition', {
    ihs_composition_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    kun_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    composition_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ihs_composition',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ihs_composition_pk",
        unique: true,
        fields: [
          { name: "ihs_composition_id" },
        ]
      },
    ]
  });
};
