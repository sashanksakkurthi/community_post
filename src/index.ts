import express, { Application } from "express";
import { Server } from "http";
import dotenv from "dotenv";
import auth from "./router/authentication";
import posts from "./router/posts";
import comment from "./router/comment";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", auth);
app.use("/api/v1", posts);
app.use("/api/v1", comment);

const PORT = process.env.PORT;
const server: Server = app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
