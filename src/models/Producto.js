const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre Obligatorio"],
  },
  stock: {
    type: String,
    required: [true, "Stock Obligatorio"],
  },
  precio: {
    type: String,
    required: [true, "Precio obligatorio"],
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
