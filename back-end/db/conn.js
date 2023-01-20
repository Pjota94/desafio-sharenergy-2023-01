import mongoose from "mongoose";
require("dotenv").config();

const dbMongo = process.env.DB_MONGO;

const main = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dbMongo);
    console.log("MongoDB conectado!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default main;
