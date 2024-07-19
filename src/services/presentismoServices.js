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
};

module.exports = presentismoServices;
