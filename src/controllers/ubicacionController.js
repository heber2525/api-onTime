const ubicacionServices = require("../services/ubicacionServices");

const ubicacionController = {
  create: async (req, res) => {
    try {
      const ubicacion = await ubicacionServices.create(req.body);
      res.send(ubicacion);
    } catch (error) {
      console.log(error, "create ubicacion-controller");
      res.status(400).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const ubicaciones = await ubicacionServices.getAll();
      res.send(ubicaciones);
    } catch (error) {
      console.log(error, "getAll-ubicaciones");
      res.status(400).send(error);
    }
  },
  delete: async (id) => {
    try {
      const { id } = req.params;
      const ubicacion = await ubicacionServices.delete(id);
      res.send(ubicacion);
    } catch (error) {
      console.log(error, "delete ubicacionControllers");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const ubicacion = await ubicacionServices.modify(id, req.body);
      res.send(ubicacion);
    } catch (error) {
      console.log(id, "modify ubicacion-Controllers");
      res.status(400).send(error);
    }
  },
  getOne: async (id) => {
    try {
      const { id } = req.params;
      const ubicacion = await ubicacionServices.getOne(id);
      res.send(ubicacion);
    } catch (error) {
      console.log(error, "gerOne ubicacion-controllers");
      res.status(400).send(error);
    }
  },
};
module.exports = ubicacionController;
