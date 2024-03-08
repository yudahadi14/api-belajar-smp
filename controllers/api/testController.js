const models = require("../../models");
const { Op } = require("sequelize");
const moment = require("moment");
const { success, error } = require("../../helpers/utility/response");

exports.testerFunction = (req, res) => {
  return models.pegawai
    .findAll({
      include: [
        {
          model: models.pegawai_in_grup,
          as: "in_grup",
          required: true,
          where: {
            peg_in_grp_id_grup: 18,
          },
        },
        {
          model: models.mst_firebase,
          as: "firebase",
          required: true,
          where: {
            firebase_clnt_token: {
              [Op.not]: null,
            },
          },
        },
      ],
    })
    .then((data) => {
      return success(req, res, data, "", 200);
    })
    .catch((err) => {
      return error(req, res, "", "", 500, err);
    });
};
