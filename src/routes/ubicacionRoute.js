const express = require("express");
const verifyRol = require("../middlewares/verifyRol");
const ubicacionController = require("../controllers/ubicacionController");

const router = express.Router();

router.get("/", ubicacionController.getAll);

router.post("/", ubicacionController.create);

router.delete("/:id", ubicacionController.delete);

router.put("/:id", ubicacionController.modify);

router.get("/:id", ubicacionController.getOne);

module.exports = router;
