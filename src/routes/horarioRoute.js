const express = require("express");
const verifyRol = require("../middlewares/verifyRol");
const horarioController = require("../controllers/horarioController");

const router = express.Router();

router.get("/", horarioController.getAll);

router.post("/", horarioController.create);

router.delete("/:id", horarioController.delete);

router.put("/:id", horarioController.modify);

router.get("/:id", horarioController.getOne);

module.exports = router;
