const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ihs_specimen', {
    ihs_specimen_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    specimen_id: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    mintalab_dt_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ihs_specimen',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ihs_specimen_pk",
        unique: true,
        fields: [
          { name: "ihs_specimen_id" },
        ]
      },
    ]
  });
};
