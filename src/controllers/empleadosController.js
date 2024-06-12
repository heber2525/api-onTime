const bcrypt = require("bcrypt");

const empleadoServices = require("../services/empleadoServices");

const empleadoController = {
  getAll: async (req, res) => {
    try {
      const empleados = await empleadoServices.getAll();
      res.send(empleados);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const { password } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      const empleado = await empleadoServices.create({ ...req.body, password: passwordHash });
      res.send(empleado);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const empleado = await empleadoServices.delete(id);

      res.send(`empleado ${empleado} borrado`);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const empleado = await empleadoServices.modify(id, req.body);
      res.send(empleado);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const empleado = await empleadoServices.getOne(id);
      res.send(empleado);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  login: async (req, res) => {
    try {
      const { correo, password } = req.body;
      const empleado = await empleadoServices.getOneByCorreo(correo);
      if (!empleado) {
        return res.status(404).send("Correo no pertenece a un usuario");
      }
      const confirmedPassword = await bcrypt.compare(password, empleado.password);
      if (!confirmedPassword) {
        return res.status(404).send("Password no pertenece a un usuario");
      }
      res.status(200).send(empleado);
    } catch (error) {}
  },
};

module.exports = empleadoController;
