const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihs_dispense_medication', {
    ihs_dispense_medication: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dispense_medication_id: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    rsp_poli_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ihs_dispense_medication',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ihs_dispense_medication_pk",
        unique: true,
        fields: [
          { name: "ihs_dispense_medication" },
        ]
      },
    ]
  });
};
