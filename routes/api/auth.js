const express = require("express");
const {
  // getToken,
  refreshToken,
  // getTokenAdmin,
  // daftarUser,
  // updateUser,
  refreshTokenAdmin,
  // forgetPasswordRequest,
  // forgetPasswordValidate,
  // forgetPasswordChange,
  // resetByPass,
  getTokenIGD,
  getUserIGD,
} = require("../../controllers/api/authController");
const { postLogin } = require("../../helpers/validators/auth");
const auth = require("../../middleware/authMid");
const router = express.Router();

// router.post("/login-admin", postLogin, getTokenAdmin);
// router.post("/login-pasien", postLogin, getToken);
// router.post("/daftar-pasien", daftarUser);
// router.post("/update-pasien", auth, updateUser);
// router.post("/forget-password/request", forgetPasswordRequest);
// router.get("/forget-password/validate", forgetPasswordValidate);
// router.post("/forget-password/change", forgetPasswordChange);
router.get("/refresh-token", refreshToken);
router.get("/refresh-token-admin", refreshTokenAdmin);
// router.get("/reset-pass", resetByPass);

router.post("/login-igd", postLogin, getTokenIGD);
router.get("/getlogin-igd", auth, getUserIGD);


module.exports = router;
