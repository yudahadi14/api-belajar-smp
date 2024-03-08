const jwt = require("jsonwebtoken");

exports.regenerateToken = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_TOKEN_KEY,
    function (err, decoded) {
      if (err) {
        return {
          error: err,
        };
      }
      return decoded;
    }
  );
};

exports.verifyAuth = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_AUTH_TOKEN_KEY,
    function (err, decoded) {
      if (err) {
        return {
          error: err,
        };
      }
      return decoded;
    }
  );
};

exports.signRefreshJwt = (data) => {
  return jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY, {
    expiresIn: process.env.JWT_REFRESH_TIME,
  });
};

exports.signAuthJwt = (data) => {
  return jwt.sign(data, process.env.JWT_AUTH_TOKEN_KEY, {
    expiresIn: process.env.JWT_AUTH_TIME,
  });
};

exports.signForgetJwtPwd = (data) => {
  return jwt.sign(data, process.env.JWT_FORGET_KEY, {
    expiresIn: process.env.JWT_FORGET_TIME,
  });
};

exports.verifyForgetJwtPwd = (token) => {
  return jwt.verify(token, process.env.JWT_FORGET_KEY, function (err, decoded) {
    if (err) {
      return {
        error: err,
      };
    }
    return decoded;
  });
};

exports.signRefreshIgdJwt = (data) => {
  return jwt.sign(data, process.env.JWT_REFRESH_TOKEN_KEY_IGD, {
    expiresIn: process.env.JWT_REFRESH_TIME_IGD,
  });
};

exports.signAuthIgdJwt = (data) => {
  return jwt.sign(data, process.env.JWT_AUTH_TOKEN_KEY, {
    expiresIn: process.env.JWT_AUTH_TIME,
  });
};
