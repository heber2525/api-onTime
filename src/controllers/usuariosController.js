const bcrypt = require("bcrypt");
const usuarioServices = require("../services/usuarioServices");
const empresaServices = require("../services/empresaServices");
const Empresa = require("../models/empresa");

require("dotenv").config();

const usuarioController = {
  getAll: async (req, res) => {
    try {
      const usuarios = await usuarioServices.getAll();
      res.send(usuarios);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const { password, empresa } = req.body;
      const empresaData = await empresaServices.getOne(empresa);
      if (!empresaData) {
        res.status(400).send("empresa no encontrada");
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const usuario = await usuarioServices.create({ ...req.body, password: passwordHash });
      await Empresa.findByIdAndUpdate(
        empresa,
        { $push: { empleados: usuario._id } },
        { new: true, useFindAndModify: false }
      );
      // const newEmpresa = {
      //   ...empresaData,
      //   empleados: [...empresaData.empleados, usuario._id],
      // };
      // console.log("este es new empresa", newEmpresa);
      // await empresaServices.modify(empresaData._id, newEmpresa);
      // console.log(usuario, empresaData);
      res.send(usuario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await usuarioServices.delete(id);
      await Empresa.findByIdAndUpdate(
        usuario.empresa,
        { $pull: { empleados: usuario._id } },
        { new: true, useFindAndModify: false }
      );

      res.send(`usuario ${usuario} borrado`);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modify: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await usuarioServices.modify(id, req.body);
      res.send(usuario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modifyPassword: async (req, res) => {
    try {
      console.log("modifyPassword");
      const { id } = req.params;
      const { password, newPassword } = req.body;

      if (!password || !newPassword) {
        res.status(400).send("no existe ningun password");
      }

      const usuario = await usuarioServices.getOne(id);
      if (!usuario) {
        res.status(400).send("usuario no existe");
      }
      const confirmedPassword = await bcrypt.compare(password, usuario.password);
      if (!confirmedPassword) {
        return res.status(404).send("Password de origen no es correcto");
      }
      const passwordHash = await bcrypt.hash(newPassword, 10);

      const user = { password: passwordHash };
      const modifiedUsuario = await usuarioServices.modify(id, user);
      console.log(user, "este es el user");
      res.send(modifiedUsuario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  modifySchedule: async (req, res) => {
    try {
      const { id } = req.params;
      const { horarios } = req.body;
      const usuario = await usuarioServices.modify(id, { horarios });
      res.send(usuario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await usuarioServices.getOne(id);
      res.send(usuario);
    } catch (error) {
      console.log(error, "error de conexion");
      res.status(400).send(error);
    }
  },
};

module.exports = usuarioController;
