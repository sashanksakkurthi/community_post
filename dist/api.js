"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likesService_1 = require("./service/likesService");
const authService_1 = require("./service/authService");
const commentService_1 = require("./service/commentService");
const postService_1 = require("./service/postService");
const router = express_1.default.Router();
router.get("/get-posts/", authService_1.isAuthenticated, postService_1.getLatestPosts);
router.get("/get-posts/:hashId/", authService_1.isAuthenticated, postService_1.getHashSpecificPosts);
router.get("/get-user-posts/:userId/", authService_1.isAuthenticated, postService_1.getUserSpecificPosts);
router.post("/login-user/", authService_1.login);
router.post("/register-user/", authService_1.register);
router.post("/verify-user/", authService_1.isAuthenticated, authService_1.verifyUser);
router.post("/delete-user/", authService_1.isAuthenticated, authService_1.deleteUser);
router.post("/update-user/", authService_1.isAuthenticated, authService_1.updateUser);
router.post("/create-post/", authService_1.isAuthenticated, postService_1.createPost);
router.post("/update-post/", authService_1.isAuthenticated, postService_1.updatePost);
router.post("/delete-post/", authService_1.isAuthenticated, postService_1.deletePost);
router.post("/create-comment/", authService_1.isAuthenticated, commentService_1.createComment);
router.post("/delete-comment/", authService_1.isAuthenticated, commentService_1.deleteComment);
router.post("/update-comment/", authService_1.isAuthenticated, commentService_1.updateComment);
router.post("/create-like/", authService_1.isAuthenticated, likesService_1.createLike);
router.post("/delete-like/", authService_1.isAuthenticated, likesService_1.deleteLike);
exports.default = router;
