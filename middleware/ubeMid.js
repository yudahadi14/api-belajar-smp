const { error } = require("../helpers/utility/response");
const models = require("../models");
const auth = (req, res, next) => {
  let { peg_id } = req.user;
  return models.mst_ube_role
    .findOne({
      where: {
        peg_id: peg_id,
      },
    })
    .then((role) => {
      if (role && role.role_name === "admin") {
        return next();
      }
      return error(
        req,
        res,
        {},
        "Ada Kesalahan",
        401,
        null
      );
    })
    .catch((err) => {
      return error(
        req,
        res,
        {},
        "Ada Kesalahan",
        err.message === "401" ? 401 : 500,
        err
      );
    });
};

module.exports = auth;
