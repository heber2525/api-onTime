const express = require("express");
const empleadoRoute = require("./src/routes/empleadoRoute.js");
const proveedorRoute = require("./src/routes/proveedorRouter.js");
const productoRoute = require("./src/routes/productoRoute");
const Horario = require("./src/models/Horario.js");
const mongoose = require("mongoose");
const db = require("./src/config/database");

db();

const app = express();
app.use(express.json()); // es el middlaware para parsear json
app.use("/empleados", empleadoRoute);
app.use("/producto", productoRoute);
app.use("/proveedor", proveedorRoute);
app.post("/horario", async (req, res) => {
  const nuevoHorario = new Horario(req.body);
  const horario = await nuevoHorario.save();
  res.send(horario);
});

app.listen(3000, () => {
  // escucha al puerto y llamada al callback
  console.log("puerto levantado");
});
