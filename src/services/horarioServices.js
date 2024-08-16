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
  getOneByEmpresaId: async (empresaId, fechaInicio, fechaFin) => {
    let consulta = { empresa: empresaId };

    consulta = fechaInicio ? { ...consulta, fechaInicio: { $gte: new Date(fechaInicio) } } : consulta;
    consulta = fechaFin ? { ...consulta, fechaFin: { $lte: new Date(fechaFin) } } : consulta;

    const horario = await Horario.find(consulta);
    return await horario;
  },
  getOneByUsuarioId: async (usuarioId, fechaInicio, fechaFin) => {
    let consulta = { usuario: usuarioId };
    const fechaComienzo = new Date(fechaInicio);
    const fechaFinal = new Date(fechaFin);
    fechaComienzo.setHours(0, 0, 0, 0);
    fechaFinal.setHours(23, 59, 59, 999);

    consulta = fechaInicio ? { ...consulta, fechaInicio: { $gte: fechaComienzo } } : consulta;
    consulta = fechaFin ? { ...consulta, fechaFin: { $lte: fechaFinal } } : consulta;

    console.log(consulta);
    const horario = await Horario.find(consulta);
    return await horario;
  },
};

module.exports = horarioServices;
