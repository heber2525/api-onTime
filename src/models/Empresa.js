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
  horarioApertura: {
    type: String,
    required: true,
  },
  horarioCierre: {
    type: String,
    required: true,
  },
});
const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = Empresa;
