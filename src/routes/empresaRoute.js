const express = require("express");
const verifyRol = require("../middlewares/verifyRol");
const empresaController = require("../controllers/empresaControllers");

const router = express.Router();

router.get("/", empresaController.getAll);

router.post("/", empresaController.create);

router.delete("/:id", empresaController.delete);

router.put("/:id", empresaController.modify);

router.get("/:id", empresaController.getOne);

module.exports = router;
