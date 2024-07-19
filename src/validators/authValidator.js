const { check, validationResult } = require("express-validator");

const validateLogin = [
  check("correo").isEmail().withMessage("Ingrese correo válido"),
  check("password").trim().isLength({ min: 6 }).withMessage("ingrese un password valido"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = validateLogin;
