const express = require("express");
const proveedorController = require("../controllers/proveedorController");

const router = express.Router();

router.get("/", proveedorController.getAll);

router.post("/", proveedorController.create);

router.delete("/:id", proveedorController.delete);

router.put("/:id", proveedorController.modify);

router.get("/:id", proveedorController.getOne);

module.exports = router;
