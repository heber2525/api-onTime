const express = require("express");
const empleadoController = require("../controllers/empleadosController");

const router = express.Router();

router.get("/", empleadoController.getAll);

router.post("/", empleadoController.create);

router.delete("/:id", empleadoController.delete);

router.put("/:id", empleadoController.modify);

router.get("/:id", empleadoController.getOne);

router.post("/login", empleadoController.login);

module.exports = router;
