"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSpecificPosts = exports.getHashSpecificPosts = exports.getLatestPosts = exports.deletePost = exports.updatePost = exports.createPost = void 0;
const posts_1 = require("../models/posts");
const createPost = async (req, res) => {
    const { userId, content } = req.body;
    try {
        const post = await (0, posts_1.CreatePost)(userId, content);
        res.status(201).json({ post: post });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.createPost = createPost;
const updatePost = async (req, res) => {
    const { hash, content } = req.body;
    try {
        const post = await (0, posts_1.UpdatePost)(hash, content);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    const hash = req.body.hash;
    try {
        const post = (0, posts_1.DeletePost)(hash);
        res.status(200).json({ post: post });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.deletePost = deletePost;
const getLatestPosts = async (req, res) => {
    try {
        const posts = await (0, posts_1.LatestPosts)();
        res.status(200).json({ posts: posts });
    }
    catch (error) {
        res.status(400).json({ error: "unable to get posts" });
    }
};
exports.getLatestPosts = getLatestPosts;
const getHashSpecificPosts = async (req, res) => {
    const hash = req.params.hashId;
    if (!hash) {
        res.status(400).json({ error: "Post not founded" });
    }
    else {
        try {
            const posts = await (0, posts_1.PostByHash)(hash);
            res.status(200).json({ post: posts });
        }
        catch (error) {
            res.status(400).json({ error: "Post not founded" });
        }
    }
};
exports.getHashSpecificPosts = getHashSpecificPosts;
const getUserSpecificPosts = async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        res.status(400).json({ error: "User Posts not founded" });
    }
    else {
        try {
            const posts = await (0, posts_1.UserSpecificPosts)(userId);
            res.status(200).json({ post: posts });
        }
        catch (error) {
            res.status(400).json({ error: "User Posts not founded" });
        }
    }
};
exports.getUserSpecificPosts = getUserSpecificPosts;
