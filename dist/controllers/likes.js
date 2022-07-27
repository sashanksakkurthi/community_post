"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLike = exports.createLike = void 0;
const likes_1 = require("../models/likes");
const createLike = async (req, res) => {
    const userId = req.body.userId;
    const postId = req.body.postId;
    try {
        const like = await (0, likes_1.CreateLike)(postId, userId);
        res.status(201).json({ like: like });
    }
    catch (error) {
        res.status(400).json({ error: "post not founded" });
    }
};
exports.createLike = createLike;
const deleteLike = async (req, res) => {
    const hash = req.body.hash;
    try {
        const like = await (0, likes_1.DeleteLike)(hash);
        res.status(201).json({ like: like });
    }
    catch (error) {
        res.status(400).json({ error: "post not founded" });
    }
};
exports.deleteLike = deleteLike;
