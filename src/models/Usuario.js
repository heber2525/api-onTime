const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre obligatorio"],
  },
  dni: {
    type: String,
    required: [true, "DNI obligatorio"],
  },
  correo: {
    type: String,
    unique: true,
    required: [true, "correo obligatorio"],
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: [true, "Obligatorio"],
    enum: ["empleado", "administrador"],
  },
  categoria: {
    type: String,
    validate: {
      validator: function (value) {
        if (this.rol === "empleado") {
          return true;
        }
      },
    },
    enum: ["cocinero", "camarero"],
  },
  horarios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Horario",
    },
  ],
  empresa: {
    type: Schema.Types.ObjectId,
    ref: "Empresa",
  },
});
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
