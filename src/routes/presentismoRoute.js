const express = require("express");
const verifyRol = require("../middlewares/verifyRol");
const presentismoController = require("../controllers/presentismoControllers");

const router = express.Router();

router.get("/", presentismoController.getAll);

router.post("/", presentismoController.create);

router.delete("/:id", presentismoController.delete);

router.put("/:id", presentismoController.modify);

router.get("/:id", presentismoController.getOne);

module.exports = router;
