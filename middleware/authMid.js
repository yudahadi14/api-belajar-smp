const jwt = require("jsonwebtoken");
const { verifyAuth } = require("../helpers/utility/jwt");
const { error } = require("../helpers/utility/response");
const auth = (req, res, next) => {
  const auth = req.header("x-auth-token") || req.query.auth_token;
  const { baseUrl, path, query } = req;
  if (!auth) {
    if (req.accepts("html")) {
      return res.render("login", {
        baseUrl: baseUrl,
        path: path,
        query: query,
        serverUrl: process.env.SERVER_URL,
      });
    }
    return error(req, res, {}, "Not Authenticated", 401, {});
  }
  const verify = verifyAuth(auth);
  //console.log(verify);
  if (verify.error) {
    if (req.accepts("html")) {
      return res.render("login", {
        baseUrl: baseUrl,
        path: path,
        query: query,
        serverUrl: process.env.SERVER_URL,
      });
    }
    if (verify.error.name === "JsonWebTokenError") {
      return error(req, res, {}, "Not Authenticated", 401, {});
    } else if (verify.error.name == "TokenExpiredError") {
      return error(req, res, {}, "Token Expired!.", 410, {});
    } else {
      return error(req, res, {}, "Not Authenticated", 400, {});
    }
  }

  req.user = verify;
  return next();
};

module.exports = auth;
