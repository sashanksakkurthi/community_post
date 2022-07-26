import express, { IRouter } from "express";
import {
  isAuthenticated,
  login,
  register,
  verifyUser,
} from "../controllers/authentication";

const router: IRouter = express.Router();

router.post("/login/", login);
router.post("/register/", register);
router.post("/verify/", isAuthenticated, verifyUser);

export default router;
