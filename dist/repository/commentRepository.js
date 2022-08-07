"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComments = exports.UpdateComment = exports.CreateComment = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateComment = async (postId, userId, content) => {
    return prisma.comments.create({
        data: {
            postId: postId,
            userId: userId,
            comment: content,
        },
        select: {
            hash: true,
            comment: true,
            postId: true,
            userId: true,
            createdAt: true,
        },
    });
};
exports.CreateComment = CreateComment;
const UpdateComment = async (hash, content) => {
    return await prisma.comments.update({
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
};
exports.UpdateComment = UpdateComment;
const DeleteComments = async (hash) => {
    return prisma.comments.delete({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
        },
    });
};
exports.DeleteComments = DeleteComments;
