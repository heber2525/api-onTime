const empresaServices = require("../services/empresaServices");
const geolocalizacionServices = require("../services/geolocalizacionServices");
const horarioServices = require("../services/horarioServices");
const presentismoServices = require("../services/presentismoServices");
const { compararHorario } = require("../utils");

const presentismoController = {
  create: async (req, res) => {
    try {
      const { usuarioId, empresaId } = req.body;
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toISOString().split("T")[0];

      // Obtener horarios para el usuario en la fecha actual
      const horario = await horarioServices.getOneByUsuarioId(usuarioId, fechaFormateada, fechaFormateada);

      // Obtener la empresa
      const empresa = await empresaServices.getOne(empresaId);

      // Verificar si se encontraron horarios para el usuario
      if (horario.length === 0) {
        return res.status(400).send("No se encontraron horarios para el usuario");
      }

      // Verificar si la empresa existe y si el usuario está en la lista de empleados
      if (!empresa || !empresa.empleados.some((empleado) => empleado._id.toString() === usuarioId.toString())) {
        return res.status(400).send("No se encontró la empresa para el usuario");
      } // Verificar si el usuario está en la ubicación de la empresa
      // const { latitud, longitud } = empresa.direccion;
      // if (geolocalizacionServices.estaEnRango()) {
      //   return res
      //     .status(400)
      //     .send('El usuario no se encuentra en la ubicación de la empresa');
      // }
      const { geolocalizacion, ...pre } = req.body;
      const presentismo = await presentismoServices.create({
        usuario: pre.usuarioId,
        empresa: pre.empresaId,
        estado: compararHorario("08:15", 15, 30), //estado: compararHorario(horario[0].horarioEntrada, 15, 30),
        fecha: fechaActual,
        firmado: true,
      });
      // Responder con el horario (puedes descomentar esta línea cuando estés listo para crear el presentismo)
      res.send(presentismo);
    } catch (error) {
      console.log(error, "create presentismo-controller");
      res.status(400).send(error.message || "Error al crear presentismo");
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
  delete: async () => {
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
  getOne: async () => {
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
