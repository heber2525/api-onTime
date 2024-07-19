const Ubicacion = require("../models/Ubicacion");

const ubicacionServices = {
  create: async (data) => {
    const nuevaUbicacion = new Ubicacion(data);
    return await nuevaUbicacion.save();
  },
  getAll: async () => {
    const todasLasUbicaciones = await Ubicacion.find();
    return await todasLasUbicaciones;
  },
  delete: async (id) => {
    const ubicacion = await Ubicacion.findByIdAndDelete(id);
    return await ubicacion;
  },
  modify: async (id, data) => {
    const ubicacion = await Ubicacion.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    return await ubicacion;
  },
  getOne: async (id) => {
    const ubicacion = await Ubicacion.findById(id);
    return await ubicacion;
  },
};

module.exports = ubicacionServices;
