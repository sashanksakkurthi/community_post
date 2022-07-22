import express, { IRouter, Request, Response } from "express";
import { login, register } from "../controllers/auth.controller";
const router: IRouter = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;
