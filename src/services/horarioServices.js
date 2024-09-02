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
    // Crea la consulta básica para el usuario
    let consulta = { usuario: usuarioId };

    // Si se proporciona una fecha de inicio y una fecha de fin
    if (fechaInicio || fechaFin) {
      const fechaConsultaInicio = fechaInicio ? new Date(fechaInicio) : new Date("1970-01-01");
      const fechaConsultaFin = fechaFin ? new Date(fechaFin) : new Date("9999-12-31");

      fechaConsultaInicio.setHours(0, 0, 0, 0);
      fechaConsultaFin.setHours(23, 59, 59, 999);

      // Agrega las condiciones para intersectar el rango de fechas
      consulta = {
        ...consulta,
        fechaInicio: { $lte: fechaConsultaFin }, // La fecha de inicio del horario debe ser antes o igual que la fecha final de la consulta
        fechaFin: { $gte: fechaConsultaInicio }, // La fecha de fin del horario debe ser después o igual que la fecha de inicio de la consulta
      };
    }

    console.log("Consulta:", consulta);
    const horarios = await Horario.find(consulta);
    return horarios;
  },
};

module.exports = horarioServices;
