const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presentismoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  empresa: {
    type: Schema.Types.ObjectId,
    ref: "Empresa",
  },
  fecha: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ["Presente", "Ausente", "Tarde"],
    required: true,
  },
  horaEntrada: {
    type: String,
    required: true,
  },
  horaSalida: {
    type: String,
    required: true,
  },
  firmado: {
    type: Boolean,
  },
});

const Presentismo = mongoose.model("Presentismo", presentismoSchema);
module.exports = Presentismo;
