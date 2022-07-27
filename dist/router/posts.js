"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/authentication");
const posts_1 = require("../controllers/posts");
const router = express_1.default.Router();
router.post("/create-post/", authentication_1.isAuthenticated, posts_1.createPost);
router.post("/update-post/", authentication_1.isAuthenticated, posts_1.updatePost);
router.post("/delete-post/", authentication_1.isAuthenticated, posts_1.deletePost);
router.get("/get-posts/", authentication_1.isAuthenticated, posts_1.getLatestPosts);
router.get("/get-posts/:hashId/", authentication_1.isAuthenticated, posts_1.getHashSpecificPosts);
router.get("/get-user-posts/:userId/", authentication_1.isAuthenticated, posts_1.getUserSpecificPosts);
exports.default = router;
