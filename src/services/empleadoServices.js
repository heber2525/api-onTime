const Empleado = require("../models/Empleado");

const empleadoServices = {
  create: async (data) => {
    const nuevoEmpleado = new Empleado(data);
    return await nuevoEmpleado.save();
  },
  getAll: async () => {
    const todosLosempleados = await Empleado.find();
    return await todosLosempleados;
  },
  delete: async (id) => {
    const empleado = await Empleado.findByIdAndDelete(id);
    return await empleado;
  },
  modify: async (id, data) => {
    const empleado = await Empleado.findByIdAndUpdate(id, data);
    return await empleado;
  },
  getOne: async (id) => {
    const empleado = await Empleado.findById(id);
    return await empleado;
  },
  getOneByCorreo: async (correo) => {
    const empleado = await Empleado.findOne({ correo });
    return await empleado;
  },
};

module.exports = empleadoServices;
