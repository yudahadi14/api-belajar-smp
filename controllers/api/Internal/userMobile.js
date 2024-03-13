const models = require("../../../modelsmengajar");
const { QueryTypes, Op } = require("sequelize");
const { success, error } = require("../../../helpers/utility/response");
const moment = require("moment");
const { sequelize } = require("../../../models");
const { default: axios } = require("axios");
const { pagination } = require("../../../helpers/utility/common");
// const { funcSendFcm } = require("../Firebase/cloudMessagingController");
const { globalLogger } = require("../../../helpers/utility/logger");
// const axiosBPJS = require("../BPJS/Helpers/axios");
const multer = require('multer');
var bodyParser = require('body-parser');
// const { QueryTypes } = require("sequelize");
const fs = require("fs");

exports.usersignup = (req, res) => {

    

}