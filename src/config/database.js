const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("mongodb connect");
  } catch (error) {
    console.log(error, "error de conexion");
  }
};
module.exports = db;
