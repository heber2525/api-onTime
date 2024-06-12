const Producto = require("../models/Producto.js");
const productoServices = require("../services/productoServices.js");

const productoController = {
  create: async (req, res) => {
    // no entiendo bien req, res? son los de abajo ? pero es un objeto o  no ?
    try {
      const producto = await productoServices.create(req.body);
      res.send(producto);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const productos = await productoServices.getAll();
      res.send(productos);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await productoServices.getOne(id);
      res.send(producto);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await productoServices.modify(id, req.body);
      res.send(producto);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await productoServices.delete(id);
      res.send(producto);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
};
module.exports = productoController;
