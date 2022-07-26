import express, { IRouter } from "express";
import { isAuthenticated } from "../controllers/authentication";
import {
  createUserPosts,
  getLatestPosts,
  getHashSpecificPosts,
  getUserSpecificPosts,
} from "../controllers/posts";

const router: IRouter = express.Router();

router.post("/create-post/", isAuthenticated, createUserPosts);
router.get("/posts/", isAuthenticated, getLatestPosts);
router.get("/posts/:hashId", isAuthenticated, getHashSpecificPosts);
router.get("/user-posts/:userId", isAuthenticated, getUserSpecificPosts);

export default router;
