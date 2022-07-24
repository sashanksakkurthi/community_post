import express, { IRouter } from "express";
import {
  isAuthenticated,
  login,
  register,
} from "../controllers/auth.controller";

const router: IRouter = express.Router();

router.post("/login/", login);
router.post("/register/", register);
router.post("/verify/", isAuthenticated);

export default router;
