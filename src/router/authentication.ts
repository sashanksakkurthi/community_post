import express, { IRouter } from "express";
import {
  isAuthenticated,
  login,
  register,
  verifyUser,
  deleteUser,
  updateUser,
} from "../controllers/authentication";

const router: IRouter = express.Router();

router.post("/login/", login);
router.post("/register/", register);
router.post("/verify/", isAuthenticated, verifyUser);
router.post("/delete-user/", isAuthenticated, deleteUser);
router.post("/update-user/", isAuthenticated, updateUser);

export default router;
