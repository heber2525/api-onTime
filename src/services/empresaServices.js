const Empresa = require("../models/empresa");

const empresaServices = {
  create: async (data) => {
    const nuevaEmpresa = new Empresa(data);
    return await nuevaEmpresa.save();
  },
  getAll: async () => {
    const todasLasEmpresas = await Empresa.find();
    return await todasLasEmpresas;
  },
  delete: async (id) => {
    const empresa = await Empresa.findByIdAndDelete(id);
    return await empresa;
  },
  modify: async (id, data) => {
    const empresa = await Empresa.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    return await empresa;
  },
  getOne: async (id) => {
    const empresa = await Empresa.findById(id).populate(["empleados", "ubicacion"]);
    return await empresa;
  },
};

module.exports = empresaServices;
