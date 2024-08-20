const empresaServices = require("../services/empresaServices");
const geolocalizacionServices = require("../services/geolocalizacionServices");
const horarioServices = require("../services/horarioServices");
const presentismoServices = require("../services/presentismoServices");

const presentismoController = {
  create: async (req, res) => {
    try {
      const { usuarioId, empresaId } = req.body;
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toISOString().split("T")[0];
      const horarios = await horarioServices.getOneByUsuarioId(usuarioId, fechaFormateada, fechaFormateada);
      const empresa = await empresaServices.getOne(empresaId);
      // const presentismo = await presentismoServices.create(req.body);
      console.log("presentismo controller", fechaActual, usuarioId, fechaFormateada);

      // res.send(presentismo);
      res.send(horarios);
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
  getOneByEmpresaId: async (req, res) => {
    try {
      const empresaId = req.params.empresaId;
      const { fechaDesde, fechaHasta } = req.query;

      const presentismo = await presentismoServices.getOneByEmpresaId(empresaId, fechaDesde, fechaHasta);
      res.send(presentismo);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOneByUsuarioId: async (req, res) => {
    try {
      const usuarioId = req.params.usuarioId;
      const { fechaDesde, fechaHasta } = req.query;

      const presentismo = await presentismoServices.getOneByUsuarioId(usuarioId, fechaDesde, fechaHasta);
      res.send(presentismo);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
};
module.exports = presentismoController;
