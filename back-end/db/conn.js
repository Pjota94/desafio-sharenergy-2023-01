import mongoose from "mongoose";
require("dotenv").config();

const main = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://pjota:1234@cluster0.cwmempk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB conectado!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default main;
