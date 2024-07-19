const presentismoServices = require("../services/presentismoServices");

const presentismoController = {
  create: async (req, res) => {
    try {
      const presentismo = await presentismoServices.create(req.body);
      res.send(presentismo);
    } catch (error) {
      console.log(error, "create presentismo-controller");
      res.status(400).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const presentismos = await presentismoServices.getAll();
      res.send(presentismos);
    } catch (error) {
      console.log(error, "getAll-presentismo");
      res.status(400).send(error);
    }
  },
  delete: async (id) => {
    try {
      const { id } = req.params;
      const presentismos = await presentismoServices.delete(id);
      res.send(presentismos);
    } catch (error) {
      console.log(error, "delete presentismoControllers");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const presentismo = await presentismoServices.modify(id, req.body);
      res.send(presentismo);
    } catch (error) {
      console.log(id, "modify presentismo-Controllers");
      res.status(400).send(error);
    }
  },
  getOne: async (id) => {
    try {
      const { id } = req.params;
      const presentismo = await presentismoServices.getOne(id);
      res.send(presentismo);
    } catch (error) {
      console.log(error, "gerOne presentismo-controllers");
      res.status(400).send(error);
    }
  },
};
module.exports = presentismoController;
