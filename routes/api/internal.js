const express = require("express");
// const {
//   cariKaryawan,
//   createKebugaran,
//   tambahRockport,
//   historyRockport,
//   tambahIMT,
// } = require("../../controllers/api/Internal/kebugaranController");
const router = express.Router();

const authMid = require("../../middleware/authMid");
// const {
//   fetchHelpDesk,
//   responseHelpDesk,
//   selesaiHelpdesk,
//   pindahHelpdesk,
//   buatHelpdesk,
// } = require("../../controllers/api/Internal/helpdeskController");
// const { testerFunction } = require("../../controllers/api/testController");
// const {
//   cariPendaftaran,
//   scanKTP,
// } = require("../../controllers/api/Internal/scanKTPController");
// const uploadID = require("../../middleware/uploadID");
// const uploadIDRemote = require("../../middleware/uploadIDRemote");
// const {
//   updatedevicescanktp,
//   scanKTPIgd,
//   inserttriase
// } = require("../../controllers/api/Internal/igdController");

// router.get("/kebugaran/cari-karyawan", cariKaryawan);
// router.post("/kebugaran/tambah", createKebugaran);
// router.post("/rockport/tambah", authMid, tambahRockport);
// router.get("/rockport/history", authMid, historyRockport);
// router.post("/imt/tambah", authMid, tambahIMT);
// router.get("/helpdesk", authMid, fetchHelpDesk);
// router.get("/helpdesk/:id", authMid, responseHelpDesk);
// router.post("/helpdesk/pindah", authMid, pindahHelpdesk);
// router.post("/helpdesk/response", authMid, responseHelpDesk);
// router.post("/helpdesk/selesaikan", authMid, selesaiHelpdesk);
// router.get("/ktp/find", cariPendaftaran);
// router.post("/ktp", uploadID, uploadIDRemote, scanKTP);
// router.post("/helpdesk", authMid, buatHelpdesk);


// router.post("/updatealat-igd", authMid, updatedevicescanktp);
// router.post("/scanktp-igd", uploadID, uploadIDRemote, scanKTPIgd);
// router.post("/inserttriase-igd", authMid, inserttriase);


// router.get("/test", testerFunction);

module.exports = router;
