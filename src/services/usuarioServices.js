const Usuario = require("../models/Usuario");

const usuarioServices = {
  create: async (data) => {
    const nuevoUsuario = new Usuario(data);
    return await nuevoUsuario.save();
  },
  getAll: async () => {
    const todosLosusuarios = await Usuario.find();
    return await todosLosusuarios;
  },
  delete: async (id) => {
    const usuario = await Usuario.findByIdAndDelete(id);
    return await usuario;
  },
  modify: async (id, data) => {
    const usuario = await Usuario.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    return await usuario;
  },
  getOne: async (id) => {
    const usuario = await Usuario.findById(id).populate(["horarios", "empresa"]);
    return await usuario;
  },
  getOneByCorreo: async (correo) => {
    const usuario = await Usuario.findOne({ correo });
    return await usuario;
  },
};

module.exports = usuarioServices;
