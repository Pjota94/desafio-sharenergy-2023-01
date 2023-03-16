import express from "express";
import cors from "cors";
import conn from "./db/conn";
import router from "./routes/clients.routes";

const app = express();

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/api", router);

conn();

app.listen(3000, () => {
  console.log("Servidor Conectado!");
});
