const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ubicacionSchema = new mongoose.Schema({
  latitud: {
    type: Number,
    required: [true, "Latitud obligatoria"],
  },
  longitud: {
    type: Number,
    required: [true, "Longitud obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "Descripcion obligatoria"],
  },
  empresa: {
    type: Schema.Types.ObjectId,
    ref: "Empresa",
    required: [true, "Empresa obligatoria"],
  },
});
const Ubicacion = mongoose.model("Ubicacion", ubicacionSchema);

module.exports = Ubicacion;
