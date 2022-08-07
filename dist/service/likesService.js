"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLike = exports.createLike = void 0;
const likeRepository_1 = require("../repository/likeRepository");
const createLike = async (req, res) => {
    const { userId, postId } = req.body;
    try {
        const like = await (0, likeRepository_1.CreateLike)(postId, userId);
        res.status(201).json({ like: like });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.createLike = createLike;
const deleteLike = async (req, res) => {
    const hash = req.body.hash;
    try {
        const like = await (0, likeRepository_1.DeleteLike)(hash);
        res.status(201).json({ like: like });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.deleteLike = deleteLike;
