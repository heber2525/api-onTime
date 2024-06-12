const Producto = require("../models/Producto");
const empleadoServices = require("./empleadoServices");

const productoServices = {
  create: async (data) => {
    //este es el dato que recibo del formulario
    const nuevoProducto = new Producto(data);
    return await nuevoProducto.save();
  },
  getAll: async () => {
    const todosLosProductos = await Producto.find();
    return todosLosProductos;
  },
  modify: async (id, data) => {
    const producto = await Producto.findByIdAndUpdate(id, data);
    return producto;
  },
  getOne: async (id) => {
    const producto = await Producto.findById(id);
    return await producto;
  },
  delete: async (id) => {
    const producto = await Producto.findByIdAndDelete(id);
    return producto;
  },
};
module.exports = empleadoServices;
