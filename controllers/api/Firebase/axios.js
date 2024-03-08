const axios = require("axios");

const instance = axios.create({
  baseURL: "https://fcm.googleapis.com",
  timeout: 1000 * 30,
  headers: {
    Authorization: `key=${process.env.FCM_TOKEN}`,
  },
});

module.exports = instance;
