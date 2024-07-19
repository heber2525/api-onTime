const express = require("express");
const authController = require("../controllers/authController");
const validateLogin = require("../validators/authValidator");

const router = express.Router();

router.post("/login", authController.login);

module.exports = router;
