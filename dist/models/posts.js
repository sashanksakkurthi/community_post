"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePost = exports.DeletePost = exports.LatestPosts = exports.CreatePost = exports.PostByHash = exports.UserSpecificPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const UserSpecificPosts = async (userId) => {
    const data = await prisma.posts.findMany({
        where: {
            userId: userId,
        },
        select: {
            publish: true,
            content: true,
            userId: true,
            hash: true,
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                },
            },
            comments: {
                select: {
                    userId: true,
                    postId: true,
                    comment: true,
                    createdAt: true,
                },
            },
        },
    });
    return data;
};
exports.UserSpecificPosts = UserSpecificPosts;
const PostByHash = async (hash) => {
    const data = await prisma.posts.findUnique({
        where: {
            hash: hash,
        },
        select: {
            publish: true,
            content: true,
            userId: true,
            hash: true,
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                },
            },
            comments: {
                select: {
                    userId: true,
                    postId: true,
                    comment: true,
                    createdAt: true,
                },
            },
        },
    });
    return data;
};
exports.PostByHash = PostByHash;
const CreatePost = async (userId, content) => {
    const data = await prisma.posts.create({
        data: {
            userId: userId,
            content: content,
        },
        select: {
            content: true,
            hash: true,
            publish: true,
            userId: true,
            createdAt: true,
        },
    });
    return data;
};
exports.CreatePost = CreatePost;
const LatestPosts = async () => {
    const data = await prisma.posts.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 20,
        select: {
            publish: true,
            content: true,
            userId: true,
            hash: true,
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                },
            },
            comments: {
                select: {
                    userId: true,
                    postId: true,
                    comment: true,
                    createdAt: true,
                },
            },
        },
    });
    return data;
};
exports.LatestPosts = LatestPosts;
const DeletePost = async (hash) => {
    const data = prisma.posts.delete({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
        },
    });
    return data;
};
exports.DeletePost = DeletePost;
const UpdatePost = async (hash, content) => {
    const data = await prisma.posts.update({
        where: {
            hash: hash,
        },
        data: {
            content: content,
        },
        select: {
            hash: true,
            content: true,
        },
    });
    return data;
};
exports.UpdatePost = UpdatePost;
