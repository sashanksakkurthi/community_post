"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = void 0;
const comments_1 = require("../models/comments");
const createComment = async (req, res) => {
    const { userId, postId, content, } = req.body.userId;
    try {
        const comment = await (0, comments_1.CreateComment)(postId, userId, content);
        res.status(201).json({ comment: comment });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.createComment = createComment;
const updateComment = async (req, res) => {
    const { hash, content } = req.body.hash;
    try {
        const comment = await (0, comments_1.UpdateComment)(hash, content);
        res.status(201).json({ comment: comment });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.updateComment = updateComment;
const deleteComment = async (req, res) => {
    const hash = req.body.hash;
    try {
        const deleted = await (0, comments_1.DeleteComments)(hash);
        res.status(200).json({ deleted: deleted });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.deleteComment = deleteComment;
