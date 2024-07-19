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
  fechaInicio: {
    type: Date,
    required: [true, "campo requerido"],
  },
  fechaFin: {
    type: Date,
    required: [true, "campo requerido"],
  },
  empresa: {
    type: Schema.Types.ObjectId,
    ref: "Empresa",
    required: [true, "campo requerido"],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: [true, "campo requerido"],
  },
});
const Horario = mongoose.model("Horario", horarioSchema);

module.exports = Horario;
