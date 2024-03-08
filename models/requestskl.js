const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "requestskl",
    {
      reqsklid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
      },
      createdat: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("now"),
      },
      reqsklstatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reqskllaporanpolisi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reqsklktp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reqsklkk: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reqsklbukunikah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alasantolak: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kelahiranid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "requestskl",
      schema: "public",
      timestamps: false,
    }
  );
};
