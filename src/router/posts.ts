import express, { IRouter } from "express";
import { isAuthenticated } from "../controllers/authentication";
import {
  createPost,
  getLatestPosts,
  getHashSpecificPosts,
  getUserSpecificPosts,
  updatePost,
  deletePost,
} from "../controllers/posts";

const router: IRouter = express.Router();

router.post("/create-post/", isAuthenticated, createPost);
router.post("/update-post/", isAuthenticated, updatePost);
router.post("/delete-post/", isAuthenticated, deletePost);
router.get("/get-posts/", isAuthenticated, getLatestPosts);
router.get("/get-posts/:hashId/", isAuthenticated, getHashSpecificPosts);
router.get("/get-user-posts/:userId/", isAuthenticated, getUserSpecificPosts);

export default router;
