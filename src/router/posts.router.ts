import express, { IRouter } from "express";
import { isAuthenticated } from "../controllers/auth.controller";
import {
  createUserPost, 
  getLatestPosts, 
} from "../controllers/posts.controller";

const router: IRouter = express.Router();

router.get("/latest-posts/", isAuthenticated, getLatestPosts);
router.post("/create-post/", isAuthenticated, createUserPost);

export default router;
 