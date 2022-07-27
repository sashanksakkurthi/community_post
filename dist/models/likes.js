"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLike = exports.CreateLike = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateLike = async (postId, userId) => {
    const data = prisma.like.create({
        data: {
            postId: postId,
            userId: userId,
        },
        select: {
            createdAt: true,
            hash: true,
            userId: true,
            postId: true,
        },
    });
    return data;
};
exports.CreateLike = CreateLike;
const DeleteLike = async (hash) => {
    const data = prisma.like.delete({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
        },
    });
    return data;
};
exports.DeleteLike = DeleteLike;
