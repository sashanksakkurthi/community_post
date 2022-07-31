import express, { Request, Response, Application } from "express";
import { Server } from "http";
import router from "./router";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("App is Working");
});

const PORT = process.env.PORT || 8080;
const server: Server = app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});