import express, { Application } from "express";
import { Server } from "http";
import dotenv from "dotenv";
import auth from "./router/auth.router";
dotenv.config();

const app: Application = express();

app.use("/api/v1", auth);

const PORT = process.env.PORT;
const server: Server = app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
