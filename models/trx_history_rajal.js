const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trx_history_rajal', {
    hist_rajal_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hist_rajal_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1. planned start 2. planned end 3. arrived 4. triage start 5. triage end 6. process start 7. process end 8. farmasi start 9.farmasi end 0. cancel"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn("now"),
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rkun_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'trx_history_rajal',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_history_rajal_pk",
        unique: true,
        fields: [
          { name: "hist_rajal_id" },
        ]
      },
    ]
  });
};
