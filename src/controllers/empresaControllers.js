const empresaServices = require("../services/empresaServices");

const empresaController = {
  create: async (req, res) => {
    try {
      const empresa = await empresaServices.create(req.body);
      res.send(empresa);
    } catch (error) {
      console.log(error, "create empresa-controller");
      res.status(400).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const empresas = await empresaServices.getAll();
      res.send(empresas);
    } catch (error) {
      console.log(error, "getAll-empresas");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const empresa = await empresaServices.delete(id);
      res.send(empresa);
    } catch (error) {
      console.log(error, "delete empresaControllers");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const empresa = await empresaServices.modify(id, req.body);
      res.send(empresa);
    } catch (error) {
      console.log(id, "modify empresa-Controllers");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const empresa = await empresaServices.getOne(id);
      res.send(empresa);
    } catch (error) {
      console.log(error, "gerOne empresa-controllers");
      res.status(400).send(error);
    }
  },
};
module.exports = empresaController;
