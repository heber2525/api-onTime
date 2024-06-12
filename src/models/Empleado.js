const mongoose = require("mongoose");

const empleadoSchema = new mongoose.Schema({
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
    validate: () => {
      if (this.rol === "empleado") {
        return true;
      }
    },
    enum: ["cocinero", "camarero"],
  },
});
const Empleado = mongoose.model("Empleado", empleadoSchema);

module.exports = Empleado;

// "horarios": [
//         { "dia": "Lunes", "horaInicio": "08:00", "horaFin": "17:00" },
//         { "dia": "Martes", "horaInicio": "08:00", "horaFin": "17:00" },
//         { "dia": "Miércoles", "horaInicio": "08:00", "horaFin": "17:00" },
//         // Agrega más días según sea necesario
//     ],
