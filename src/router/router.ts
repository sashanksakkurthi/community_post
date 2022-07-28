import express, { IRouter } from "express";
import { createLike, deleteLike } from "../controllers/likes";
import {
  isAuthenticated,
  login,
  register,
  verifyUser,
  deleteUser,
  updateUser,
} from "../controllers/authentication";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/comments";
import {
  createPost,
  getLatestPosts,
  getHashSpecificPosts,
  getUserSpecificPosts,
  updatePost,
  deletePost,
} from "../controllers/posts";

const router: IRouter = express.Router();

// user-posts get routers
router.get("/get-posts/", isAuthenticated, getLatestPosts);
router.get("/get-posts/:hashId/", isAuthenticated, getHashSpecificPosts);
router.get("/get-user-posts/:userId/", isAuthenticated, getUserSpecificPosts);

// user-authentication post router
router.post("/login-user/", login);
router.post("/register-user/", register);
router.post("/verify-user/", isAuthenticated, verifyUser);
router.post("/delete-user/", isAuthenticated, deleteUser);
router.post("/update-user/", isAuthenticated, updateUser);

// user-posts post router
router.post("/create-post/", isAuthenticated, createPost);
router.post("/update-post/", isAuthenticated, updatePost);
router.post("/delete-post/", isAuthenticated, deletePost);

// user-comment post router
router.post("/create-comment/", isAuthenticated, createComment);
router.post("/delete-comment/", isAuthenticated, deleteComment);
router.post("/update-comment/", isAuthenticated, updateComment);

// user-like post router
router.post("/create-like/", isAuthenticated, createLike);
router.post("/delete-like/", isAuthenticated, deleteLike);

export default router;
