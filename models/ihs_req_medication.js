const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihs_req_medication', {
    ihs_req_medication_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    req_medication_id: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    rsp_poli_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ihs_req_medication',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ihs_req_medication_pk",
        unique: true,
        fields: [
          { name: "ihs_req_medication_id" },
        ]
      },
    ]
  });
};
