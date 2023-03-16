import mongoose, { Schema } from "mongoose";

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
});

const Clients = mongoose.model("Clients", clientsSchema);

export default Clients;
