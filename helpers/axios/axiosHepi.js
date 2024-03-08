const axios = require("axios");
const moment = require("moment");
const qs = require("qs");
const { logging } = require("../utility/response");
const axiosHEPI = axios.create({
  baseURL: process.env.HEPI_BASE_URL,
  timeout: 1000 * 30,
  headers: {
    "sihepi-api-key": process.env.HEPI_TOKEN,
  },
});

// axiosHEPI.interceptors.request.use(
//   async (config) => {
//     let utcTime = moment.utc().format("X");
//     let token = await getToken();
//     config.headers = {
//       ...config.headers,
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
axiosHEPI.interceptors.response.use(
  function (response) {
    if (response.data.error) {
      logging(response);
    }
    return response;
  },
  function (error) {
    // logging(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
module.exports = axiosHEPI;
