import express, { IRouter, Request, Response } from "express";
import { login, register,verify } from "../controllers/auth.controller";
const router: IRouter = express.Router();

router.post("/login/", login);
router.post("/register/", register) ;
router.post("/verify/",verify)

export default router;
