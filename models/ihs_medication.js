const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihs_medication', {
    ihs_medication_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    medication_id: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    ihs_medication_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1. request 2. dispense"
    },
    rsp_poli_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ihs_medication',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ihs_medication_pk",
        unique: true,
        fields: [
          { name: "ihs_medication_id" },
        ]
      },
    ]
  });
};
