"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComment = exports.DeleteComments = exports.GetComments = exports.CreateComment = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateComment = async (postId, userId, content) => {
    const data = prisma.comments.create({
        data: {
            postId: postId,
            userId: userId,
            comment: content,
        },
        select: {
            hash: true,
            comment: true,
            createdAt: true,
            postId: true,
            userId: true,
        },
    });
    return data;
};
exports.CreateComment = CreateComment;
const GetComments = async (postId) => {
    const data = prisma.comments.findMany({
        where: {
            postId: postId,
        },
        select: {
            postId: true,
            comment: true,
            hash: true,
            userId: true,
            createdAt: true,
        },
    });
    return data;
};
exports.GetComments = GetComments;
const DeleteComments = async (hash) => {
    const data = prisma.comments.delete({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
        },
    });
    return data;
};
exports.DeleteComments = DeleteComments;
const UpdateComment = async (hash, content) => {
    const data = await prisma.comments.update({
        where: { hash: hash },
        data: {
            comment: content,
        },
        select: {
            hash: true,
            comment: true,
            postId: true,
            userId: true,
        },
    });
    return data;
};
exports.UpdateComment = UpdateComment;
