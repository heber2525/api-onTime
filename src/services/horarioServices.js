const Horario = require("../models/Horario");

const horarioServices = {
  create: async (data) => {
    const nuevoHorario = new Horario(data);
    return await nuevoHorario.save();
  },
  getAll: async () => {
    const todosLosHorarios = await Horario.find();
    return await todosLosHorarios;
  },
  delete: async (id) => {
    const horario = await Horario.findByIdAndDelete(id);
    return await horario;
  },
  modify: async (id, data) => {
    const horario = await Horario.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    return await horario;
  },
  getOne: async (id) => {
    const horario = await Horario.findById(id);
    return await horario;
  },
};

module.exports = horarioServices;
