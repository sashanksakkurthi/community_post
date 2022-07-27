"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSpecificPosts = exports.getHashSpecificPosts = exports.getLatestPosts = exports.updatePost = exports.deletePost = exports.createPost = void 0;
const posts_1 = require("../models/posts");
const createPost = async (req, res) => {
    const userId = req.body.userId;
    const content = req.body.content;
    try {
        const post = await (0, posts_1.CreatePost)(userId, content);
        res.status(201).json({ post: post });
    }
    catch (error) {
        res.status(400).json({ error: "login again" });
    }
};
exports.createPost = createPost;
const deletePost = async (req, res) => {
    const hash = req.body.hash;
    try {
        const post = (0, posts_1.DeletePost)(hash);
        res.status(200).json({ post: post });
    }
    catch (error) {
        res.status(400).json({ error: "post not founded" });
    }
};
exports.deletePost = deletePost;
const updatePost = async (req, res) => {
    const hash = req.body.hash;
    const content = req.body.content;
    try {
        const post = await (0, posts_1.UpdatePost)(hash, content);
        res.status(200).json({ post: post });
    }
    catch (error) {
        res.status(400).json({ error: "post not founded" });
    }
};
exports.updatePost = updatePost;
const getLatestPosts = async (req, res) => {
    const posts = await (0, posts_1.LatestPosts)();
    res.status(200).json({ posts: posts });
};
exports.getLatestPosts = getLatestPosts;
const getHashSpecificPosts = async (req, res) => {
    const hash = req.params.hashId;
    if (!hash) {
        res.status(400).json({ error: "Post not founded" });
    }
    try {
        const posts = await (0, posts_1.PostByHash)(hash);
        res.status(200).json({ post: posts });
    }
    catch (error) {
        res.status(400).json({ error: "Post not founded" });
    }
};
exports.getHashSpecificPosts = getHashSpecificPosts;
const getUserSpecificPosts = async (req, res) => {
    const userId = req.params.userId;
    try {
        const posts = await (0, posts_1.UserSpecificPosts)(userId);
        res.status(200).json({ post: posts });
    }
    catch (error) {
        res.status(400).json({ error: "Posts not founded" });
    }
};
exports.getUserSpecificPosts = getUserSpecificPosts;
