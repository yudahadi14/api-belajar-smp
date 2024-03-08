const { validationResult, body } = require("express-validator");

exports.validDaftarOnline = [
  body("nik").notEmpty().withMessage("Fill your ID Number!."),
  body("nik").isLength({ min: 16 }).withMessage("Wrong ID Number!."),
  body("name").notEmpty().withMessage("Fill your name!."),
  body("gender").notEmpty().withMessage("Fill your gender!."),
  body("dateOfBirth").notEmpty().withMessage("Fill your date of birth!."),
  body("address").notEmpty().withMessage("Fill your address!."),
  body("provinceCode").notEmpty().withMessage("Fill your province!."),
  body("regencyCode").notEmpty().withMessage("Fill your regency!."),
  body("districtCode").notEmpty().withMessage("Fill your district!."),
  body("villageCode").notEmpty().withMessage("Fill your village!."),
  body("rw").notEmpty().withMessage("Fill your rw!."),
  body("rt").notEmpty().withMessage("Fill your rt!."),
  body("insurrance").notEmpty().withMessage("Fill your insurrance!."),
  body("email").notEmpty().withMessage("Fill your email!."),
  body("occupation").notEmpty().withMessage("Fill your occupation!."),
  body("education").notEmpty().withMessage("Fill your education!."),
  body("tribe").notEmpty().withMessage("Fill your tribe!."),
  body("maritalStatus").notEmpty().withMessage("Fill your marital status!."),
  body("patientCompanion.relationship")
    .notEmpty()
    .withMessage("Fill your companion type!."),
  body("patientCompanion.name")
    .notEmpty()
    .withMessage("Fill your companion name!."),
  body("patientCompanion.gender")
    .notEmpty()
    .withMessage("Fill your phone companion!."),
  body("patientCompanion.dateOfBirth")
    .notEmpty()
    .withMessage("Fill your date of birth companion!."),
  body("patientCompanion.address")
    .notEmpty()
    .withMessage("Fill your alamat wali darurat!."),
  // body("identity").notEmpty().withMessage("Fill your ID's Photo!."),
  body("disabilities").notEmpty().withMessage("Fill your disabilities."),
  (req, res, next) => {
    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(400).json({
        status: 400,
        message: firstError,
        data: {},
      });
    }
    next();
  },
];
