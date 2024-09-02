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
    // Crea la consulta básica para el usuario
    let consulta = { usuario: usuarioId };

    // Si se proporciona una fecha de inicio y/o una fecha de fin
    if (fechaInicio || fechaFin) {
      const fechaConsultaInicio = fechaInicio ? new Date(fechaInicio) : new Date("1970-01-01");
      const fechaConsultaFin = fechaFin ? new Date(fechaFin) : new Date("9999-12-31");

      // Configura las horas para que las comparaciones sean precisas
      fechaConsultaInicio.setHours(0, 0, 0, 0); // Inicio del día
      fechaConsultaFin.setHours(23, 59, 59, 999); // Fin del día

      // Agrega las condiciones para intersectar el rango de fechas
      consulta.fecha = {
        $gte: fechaConsultaInicio, // La fecha debe ser después o igual que la fecha de inicio
        $lte: fechaConsultaFin, // y antes o igual que la fecha de fin
      };
    }

    console.log("Consulta:", consulta);
    const presentismo = await Presentismo.find(consulta);
    return presentismo;
  },
};

module.exports = presentismoServices;
