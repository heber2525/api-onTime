const express = require("express");
const usuarioRoute = require("./src/routes/usuarioRoute.js");
const authRoute = require("./src/routes/authRoute");
const horarioRoute = require("./src/routes/horarioRoute.js");
const presentismoRoute = require("./src/routes/presentismoRoute.js");
const empresaRoute = require("./src/routes/empresaRoute.js");
const ubicacionRoute = require("./src/routes/ubicacionRoute.js");

const db = require("./src/config/database");
const verifyToken = require("./src/middlewares/verifyToken.js");
const notFound = require("./src/middlewares/notFound.js");
const handleError = require("./src/middlewares/handleError.js");

require("dotenv").config();
db();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json()); // es el middlaware para parsear json
app.use(
  verifyToken.unless({
    path: ["/auth/login"],
  })
);
app.use("/usuarios", usuarioRoute);
app.use("/auth", authRoute);
app.use("/horario", horarioRoute);
app.use("/presentismo", presentismoRoute);
app.use("/empresa", empresaRoute);
app.use("/ubicacion", ubicacionRoute);
app.use(notFound);
app.use(handleError);
app.listen(PORT, () => {
  // escucha al puerto y llamada al callback
  console.log("puerto levantado en " + PORT);
});
