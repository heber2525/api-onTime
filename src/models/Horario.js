const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const horarioSchema = new mongoose.Schema({
  dia: {
    type: String,
    enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    required: [true, "Campo requerido"],
  },
  horarioEntrada: {
    type: String,
    required: [true, "campo requerido"],
  },
  horarioSalida: {
    type: String,
    required: [true, "campo requerido"],
  },
  empleado: {
    type: Schema.Types.ObjectId,
    ref: "Empleado",
    required: [true, "Oblgatorio"],
  },
});
const Horario = mongoose.model("Horario", horarioSchema);

module.exports = Horario;
