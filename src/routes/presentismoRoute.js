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

// POST /presentismo - Registrar presentismo (incluye verificación de proximidad).
// GET /presentismo - Obtener todos los registros de presentismo (con opción de filtro por fechas usando parámetros fechaInicio y fechaFin).
// GET /presentismo/:id - Obtener un registro de presentismo por ID.
// PUT /presentismo/:id - Actualizar un registro de presentismo por ID.
// DELETE /presentismo/:id - Eliminar un registro de presentismo por ID.
// GET /presentismo/empresa/:empresaId - Obtener registros de presentismo por empresa (con opción de filtro por fechas usando parámetros fechaInicio y fechaFin).
// GET /presentismo/usuario/:usuarioId - Obtener registros de presentismo por usuario (con opción de filtro por fechas usando parámetros fechaInicio y fechaFin).
