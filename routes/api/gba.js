const express = require("express");
const auth = require("../../middleware/authMid");
const router = express.Router();
const {
    loadDashboard,
    loadgambarbelajar,
    loadpertanyaanbelajar,
    tambahbelajar,
    loadReviewBelajar
} =  require("../../controllers/api/gbaController");


router.post("/cek-belajar", auth, loadDashboard);
router.post("/cek-belajar-gambar", auth, loadgambarbelajar);
router.post("/cek-belajar-pertanyaan", auth, loadpertanyaanbelajar);
router.post("/tambah-belajar", auth, tambahbelajar);
router.post("/cek-reviewbelajar", auth, loadReviewBelajar);

module.exports = router;
