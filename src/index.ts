import express, { Application } from "express";
import { Server } from "http";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

const PORT = process.env.PORT;
const server: Server = app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
