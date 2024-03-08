const dotenv = require("dotenv");
dotenv.config();

exports.waktuTungguDefault = process.env.WAKTU_TUNGGU || 6;
exports.quotaJKNPercent = process.env.QUOTA_JKN_PERCENT || 80;
exports.quotaUmumPercent = process.env.QUOTA_UMUM_PERCENT || 20;
