const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aspnet_Membership', {
    ApplicationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'aspnet_Applications',
        key: 'ApplicationId'
      }
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aspnet_Users',
        key: 'UserId'
      }
    },
    Password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    PasswordFormat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PasswordSalt: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    MobilePIN: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    LoweredEmail: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    PasswordQuestion: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    PasswordAnswer: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    IsApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IsLockedOut: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastPasswordChangedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastLockoutDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FailedPasswordAttemptCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FailedPasswordAttemptWindowStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FailedPasswordAnswerAttemptCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FailedPasswordAnswerAttemptWindowStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aspnet_Membership',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "aspnet_Membership_index",
        fields: [
          { name: "ApplicationId" },
          { name: "LoweredEmail" },
        ]
      },
      {
        name: "PK__aspnet_M__1788CC4D69F492A1",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
