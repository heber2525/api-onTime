const mongoose = require("mongoose");

const proveedorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre Obligatorio"],
  },
});

const Proveedor = mongoose.model("Proveedor", proveedorSchema);

module.exports = Proveedor;
