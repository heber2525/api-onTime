const Proveedor = require("../models/Proveedor");
const proveedorServices = require("../services/proveedorServices");

const proveedorController = {
  create: async (req, res) => {
    try {
      const proveedor = await proveedorServices.create(req.body);
      res.send(proveedor);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getAll: async (res, send) => {
    try {
      const proveedores = await proveedorServices.getAll();
      res.send(proveedores);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const proveedor = await proveedorServices.getOne(id);
      res.send(proveedor);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const proveedor = await proveedorServices.modify(id, req.body);
      res.send(proveedor);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const proveedor = await proveedorServices.delete(id);
      res.send;
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
};

module.exports = proveedorController;
