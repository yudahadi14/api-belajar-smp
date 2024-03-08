const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trx_midtrans', {
    trx_mt_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trx_mt_swabcovid_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    trx_mt_status_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trx_mt_status_message: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_transaction_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trx_mt_order_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    trx_mt_gross_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    trx_mt_payment_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_transaction_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trx_mt_transaction_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_bank: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_va_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_fraud_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trx_mt_pdf_url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    trx_mt_settlement_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trx_mt_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trx_mt_bill_id_pasien: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    trx_mt_bill_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trx_mt_bill_id_rec: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trx_mt_bill_tabel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trx_mt_id_pembayaran: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    trx_mt_peg_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trx_mt_id_lynan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trx_mt_rkun_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trx_midtrans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "trx_midtrans_pkey",
        unique: true,
        fields: [
          { name: "trx_mt_id" },
        ]
      },
    ]
  });
};
