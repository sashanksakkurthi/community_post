import express, { IRouter } from "express";
import { isAuthenticated } from "../controllers/authentication";
import {
  createUserComment,
  deleteComment,
  getComments,
  updateComment,
} from "../controllers/comments";

const router: IRouter = express.Router();

router.post("/create-comment/", isAuthenticated, createUserComment);
router.post("/delete-comment/", isAuthenticated, deleteComment);
router.post("/update-comment/", isAuthenticated, updateComment);
router.get("/get-comment/", isAuthenticated, getComments);

export default router;
