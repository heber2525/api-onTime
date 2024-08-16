const empresaServices = require("../services/empresaServices");
const horarioServices = require("../services/horarioServices");
const usuarioServices = require("../services/usuarioServices");

const horarioController = {
  getAll: async (req, res) => {
    try {
      const horarios = await horarioServices.getAll();
      res.send(horarios);
    } catch (error) {
      console.log(error, "getAll-horarioController");
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const empresaValida = await empresaServices.getOne(req.body.empresa);
      if (!empresaValida) {
        return res.status(400).send("empresa no válida");
      }
      const empleadoValido = await usuarioServices.getOne(req.body.usuario);
      if (!empleadoValido) {
        return res.status(400).send("empleado no válido");
      }

      const horario = await horarioServices.create(req.body);
      res.send(horario);
    } catch (error) {
      console.log(error, "create-horarioController");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const horario = await horarioServices.delete(id);

      res.send(`horario ${horario} borrado`);
    } catch (error) {
      console.log(error, "delete horarioController");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const horario = await horarioServices.modify(id, req.body);
      res.send(horario);
    } catch (error) {
      console.log(error, "modify horarioController");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const horario = await horarioServices.getOne(id);
      res.send(horario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOneByEmpresaId: async (req, res) => {
    try {
      const empresaId = req.params.empresaId;
      const { fechaDesde, fechaHasta } = req.query;

      const horario = await horarioServices.getOneByEmpresaId(empresaId, fechaDesde, fechaHasta);
      res.send(horario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOneByUsuarioId: async (req, res) => {
    try {
      const usuarioId = req.params.usuarioId;
      const { fechaDesde, fechaHasta } = req.query;

      const horario = await horarioServices.getOneByUsuarioId(usuarioId, fechaDesde, fechaHasta);
      res.send(horario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
};

module.exports = horarioController;
