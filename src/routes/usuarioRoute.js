const express = require("express");
const usuarioController = require("../controllers/usuariosController");
const verifyToken = require("../middlewares/verifyToken");
const verifyRol = require("../middlewares/verifyRol");

const router = express.Router();

router.get("/", usuarioController.getAll);

router.post("/", usuarioController.create);

router.delete("/:id", usuarioController.delete);

router.put("/:id/changePassword", usuarioController.modifyPassword);

router.put("/:id/schedule", usuarioController.modifySchedule);

router.put("/:id", usuarioController.modify);

router.get("/:id", usuarioController.getOne);

module.exports = router;
