const Proveedor = require("../models/Proveedor");

const proveedorServices = {
  create: async (data) => {
    const nuevoProveedor = await new Proveedor(data);
    return await nuevoProveedor;
  },
  getAll: async () => {
    const proveedores = await Proveedor.find();
    return proveedores;
  },
  getOne: async (id) => {
    const proveedor = await Proveedor.findById(id);
    return proveedor;
  },
  modify: async (id, data) => {
    const proveedor = await Proveedor.findByIdAndUpdate(id, data);
    return proveedor;
  },
  delete: async (id) => {
    const proveedor = await Proveedor.findByIdAndDelete(id);
    return proveedor;
  },
};
module.exports = proveedorServices;
