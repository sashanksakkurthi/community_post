import express, { Application } from "express";
import { Server } from "http";
import router from "./router";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

const PORT = process.env.PORT || 8080;
const server: Server = app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
