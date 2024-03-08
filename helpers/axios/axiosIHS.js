const axios = require("axios");
const moment = require("moment");
const qs = require("qs");
const axiosIHS = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.IHS_BASE_URL
      : process.env.IHS_BASE_URL,
  timeout: 1000 * 30,
});
let issuedTime = 0;
let expiryTime = 0;
let accessToken = "";

// const url =
//   "https://api-satusehat-dev.dto.kemkes.go.id/oauth2/v1" +
//   "/accesstoken?grant_type=client_credentials";

const url =
  process.env.IHS_AUTH_URL + "/accesstoken?grant_type=client_credentials";

const getToken = () => {
  let nowTimestamp = moment();
  let expiryTimeTotal = moment(issuedTime).add("seconds", expiryTime);
  if (nowTimestamp < expiryTimeTotal && accessToken) {
    // console.log("=== itu ===", accessToken);
    return accessToken;
  }
  return axios
    .post(
      url,
      qs.stringify({
        client_id: process.env.IHS_CLIENT_ID,
        client_secret: process.env.IHS_CLIENT_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "*/*",
        },
      }
    )
    .then((payload) => {
      if (payload.data && payload.data.status === "approved") {
        // console.log("wawaw", payload.data.expires_in);
        // console.log("wada", payload.data.issued_at);
        issuedTime = Number(payload.data.issued_at);
        expiryTime = Number(payload.data.expires_in) - 60;
        accessToken = payload.data.access_token;
        return accessToken;
      }
      throw new Error("Gagal mendapatkan token kemenkes");
    })
    .catch((err) => {
      console.log(err);
    });
};

axiosIHS.interceptors.request.use(
  async (config) => {
    let utcTime = moment.utc().format("X");
    let token = await getToken();
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
axiosIHS.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
module.exports = axiosIHS;
