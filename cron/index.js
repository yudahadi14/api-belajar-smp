const cron = require("node-cron");
const { globalLogger } = require("../helpers/utility/logger");
const {
  funcSyncAuto,
  kunjunganPasien,
} = require("../controllers/api/IHS/automationController");
const moment = require("moment");
const {
  fetchNotifHelpdesk,
} = require("../controllers/api/Internal/helpdeskController");
// cron.schedule("0 16 * * *", () => {
//   let arr = [];
//   let arrFailed = [];
//   const tgl = moment().format("YYYY-MM-DD");
//   const limit = 1;
//   return kunjunganPasien(tgl, null, limit)
//     .then((payload) => {
//       if (payload == 0) {
//         return res.json("NO DATA");
//       }

//       let page = Math.ceil(payload / limit);
//       console.log("==================" + "START" + "==================");
//       console.log("==================" + page + "==================");

//       return funcSyncAuto(
//         tgl,
//         (val) => arr.push(val),
//         (val) => arrFailed.push(val),
//         page,
//         limit
//       ).then(() => {
//         return globalLogger({
//           messagge: "Completed",
//           success: arr,
//           failed: arrFailed,
//         });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

cron.schedule("*/5 * * * *", () => {
  return fetchNotifHelpdesk();
});
