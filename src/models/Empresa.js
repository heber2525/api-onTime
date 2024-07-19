const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empresaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre obligatorio"],
  },
  cif: {
    type: String,
    required: [true, "CIF obligatorio"],
  },
  horarios: [
    {
      type: Schema.Types.ObjectId,
      ref: "Horario",
    },
  ],
  ubicacion: {
    type: Schema.Types.ObjectId,
    ref: "Ubicacion",
  },
  empleados: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
});
const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = Empresa;
