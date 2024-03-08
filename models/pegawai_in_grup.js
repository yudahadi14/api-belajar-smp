const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pegawai_in_grup', {
    peg_in_grp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    peg_in_grp_id_grup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peg_in_grp_id_peg: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pegawai_in_grup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pegawai_in_grup_id_grp_id_peg",
        fields: [
          { name: "peg_in_grp_id_grup" },
          { name: "peg_in_grp_id_peg" },
        ]
      },
      {
        name: "pegawai_in_grup_pkey",
        unique: true,
        fields: [
          { name: "peg_in_grp_id" },
        ]
      },
    ]
  });
};
