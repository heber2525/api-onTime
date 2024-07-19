const bcrypt = require("bcrypt");

const usuarioServices = require("../services/usuarioServices");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const authController = {
  login: async (req, res) => {
    try {
      const { correo, password } = req.body;
      const usuario = await usuarioServices.getOneByCorreo(correo);
      if (!usuario) {
        return res.status(404).send("Correo no pertenece a un usuario");
      }
      const confirmedPassword = await bcrypt.compare(password, usuario.password);
      if (!confirmedPassword) {
        return res.status(404).send("Password no pertenece a un usuario");
      }
      const token = jwt.sign(
        {
          nombre: usuario.name,
          correo: usuario.correo,
          rol: usuario.rol,
          categoria: usuario.categoria,
        },
        SECRET_KEY
      );
      res.status(200).send({ token });
    } catch (error) {}
  },
};

module.exports = authController;
