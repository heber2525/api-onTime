const jwt = require("jsonwebtoken");
require("dotenv").config();
const { unless } = require("express-unless");
const SECRET_KEY = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.send("token no existe");
  }
  jwt.verify(token, SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.send("token invalido");
    }
    req.user = decoded;
    next();
  });
};
verifyToken.unless = unless;
module.exports = verifyToken;
