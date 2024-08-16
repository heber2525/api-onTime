const Presentismo = require("../models/presentismo");

const presentismoServices = {
  create: async (data) => {
    const nuevoPresentismo = new Presentismo(data);
    return await nuevoPresentismo.save();
  },
  getAll: async () => {
    const todosLosPresentismos = await Presentismo.find();
    return await todosLosPresentismos;
  },
  delete: async (id) => {
    const presentismo = await Presentismo.findByIdAndDelete(id);
    return await presentismo;
  },
  modify: async (id, data) => {
    const presentismo = await Presentismo.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    return await presentismo;
  },
  getOne: async (id) => {
    const presentismo = await Presentismo.findById(id);
    return await presentismo;
  },
  getOneByEmpresaId: async (empresaId, fechaInicio, fechaFin) => {
    let consulta = { empresa: empresaId };

    consulta = fechaInicio ? { ...consulta, fecha: { $gte: new Date(fechaInicio) } } : consulta;
    consulta = fechaFin ? { ...consulta, fecha: { $lte: new Date(fechaFin) } } : consulta;

    const presentismo = await Presentismo.find(consulta);
    return await presentismo;
  },
  getOneByUsuarioId: async (usuarioId, fechaInicio, fechaFin) => {
    let consulta = { usuario: usuarioId };
    const fechaComienzo = new Date(fechaInicio);
    const fechaFinal = new Date(fechaFin);
    fechaComienzo.setHours(0, 0, 0, 0);
    fechaFinal.setHours(23, 59, 59, 999);
    consulta = fechaInicio ? { ...consulta, fecha: { $gte: fechaComienzo } } : consulta;
    consulta = fechaFin ? { ...consulta, fecha: { $lte: fechaFinal } } : consulta;

    const presentismo = await Presentismo.find(consulta);
    return await presentismo;
  },
};

module.exports = presentismoServices;
