"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComment = exports.deleteComment = exports.getComments = exports.createUserComment = void 0;
const comments_1 = require("../models/comments");
const createUserComment = async (req, res) => {
    const userId = req.body.userId;
    const postId = req.body.postId;
    const content = req.body.content;
    try {
        const comment = await (0, comments_1.CreateComment)(postId, userId, content);
        res.status(201).json({ comment: comment });
    }
    catch (error) {
        res.status(400).json({ error: "login again" });
    }
};
exports.createUserComment = createUserComment;
const getComments = async (req, res) => {
    const postId = req.body.postId;
    try {
        const comment = await (0, comments_1.GetComments)(postId);
        res.status(200).json({ comment: comment });
    }
    catch (error) {
        res.status(400).json({ error: "no comments founded" });
    }
};
exports.getComments = getComments;
const deleteComment = async (req, res) => {
    const hash = req.body.hash;
    try {
        const deleted = await (0, comments_1.DeleteComments)(hash);
        res.status(200).json({ deleted: deleted });
    }
    catch (error) {
        res.status(400).json({ error: "no comments founded" });
    }
};
exports.deleteComment = deleteComment;
const updateComment = async (req, res) => {
    const hash = req.body.hash;
    const content = req.body.content;
    try {
        const comment = await (0, comments_1.UpdateComment)(hash, content);
        res.status(201).json({ comment: comment });
    }
    catch (error) {
        res.status(400).json({ error: "login again" });
    }
};
exports.updateComment = updateComment;
