const express = require("express");
const productoController = require("../controllers/productosController");

const router = express.Router();

router.get("/", productoController.getAll);

router.post("/", productoController.create);

router.delete("/:id", productoController.delete);

router.put("/:id", productoController.modify);

router.get("/:id", productoController.getOne);

module.exports = router;
