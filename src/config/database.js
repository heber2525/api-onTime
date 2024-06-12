const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb+srv://heber:heber@cluster0.adfupoh.mongodb.net/");
    console.log("mongodb connect");
  } catch (error) {
    console.log(error, "error de conexion");
  }
};
module.exports = db;
