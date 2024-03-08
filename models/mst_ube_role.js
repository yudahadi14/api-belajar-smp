const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_ube_role', {
    ube_role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    peg_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mst_ube_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mst_ube_rule_pk",
        unique: true,
        fields: [
          { name: "ube_role_id" },
        ]
      },
    ]
  });
};
