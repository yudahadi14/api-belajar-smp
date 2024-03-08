const { success, error } = require("../../../helpers/utility/response");
const axios = require("./axios");
const moment = require("moment");
const models = require("../../../models");

exports.funcSendFcm = ({ title, body, to, data = null }) => {
  return axios
    .post("/fcm/send", {
      notification: {
        title: title,
        body: body,
      },
      data: data,
      to: to,
    })
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.sendFcm = (req, res) => {
  const { title, body, to } = req.body;
  this.funcSendFcm({
    title,
    body,
    to,
  })
    .then((data) => {
      return success(req, res, data.data, "done", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "", 500, err);
    });
};

exports.setTokenAdmin = (req, res) => {
  const { client_token } = req.body;
  let { peg_id } = req.user;
  return models.mst_firebase
    .findOne({
      where: {
        peg_id: peg_id,
      },
    })
    .then((firebase) => {
      if (firebase) {
        return models.mst_firebase.update(
          {
            firebase_clnt_token: client_token,
            updated_at: moment().format(),
          },
          {
            where: {
              peg_id: peg_id,
            },
          }
        );
      } else {
        return models.mst_firebase.create({
          firebase_clnt_token: client_token,
          peg_id,
        });
      }
    })
    .then((data) => {
      return success(req, res, "", "done", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "", 500, err);
    });
};

exports.setTokenDevice = (req, res) => {
  const { type, device_code, fcm_token } = req.body;
  return models.mst_iot_devices
    .findOne({
      where: {
        iot_dvc_type: type,
        iot_dvc_code: device_code,
      },
    })
    .then((dvc) => {
      if (!dvc) {
        return models.mst_iot_devices.create({
          iot_dvc_type: type,
          iot_dvc_code: device_code,
        });
      }
      dvc.fcm_token = fcm_token;
      dvc.save();
      return dvc;
    })
    .then((dvc) => {
      return models.mst_iot_devices.findOne({
        where: {
          iot_dvc_id: dvc.iot_dvc_id,
        },
      });
    })
    .then((data) => {
      return success(req, res, data, "done", 200);
    })
    .catch((err) => {
      return error(req, res, {}, "", 500, err);
    });
};
