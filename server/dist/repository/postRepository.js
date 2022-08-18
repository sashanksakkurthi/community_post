"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSpecificPosts = exports.PostByHash = exports.LatestPosts = exports.DeletePost = exports.UpdatePost = exports.CreatePost = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreatePost = async (userId, content) => {
    return await prisma.posts.create({
        data: {
            userId: userId,
            content: content,
        },
        select: {
            hash: true,
            content: true,
            publish: true,
            createdAt: true,
        },
    });
};
exports.CreatePost = CreatePost;
const UpdatePost = async (hash, content) => {
    return await prisma.posts.update({
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
};
exports.UpdatePost = UpdatePost;
const DeletePost = async (hash) => {
    return await prisma.posts.delete({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
        },
    });
};
exports.DeletePost = DeletePost;
const LatestPosts = async () => {
    return await prisma.posts.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 20,
        select: {
            hash: true,
            publish: true,
            content: true,
            user: {
                select: {
                    first_name: true,
                    last_name: true,
                    email: true,
                    hash: true,
                },
            },
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                    hash: true,
                },
            },
            comments: {
                select: {
                    comment: true,
                    createdAt: true,
                    hash: true,
                    user: {
                        select: {
                            first_name: true,
                            last_name: true,
                            hash: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
};
exports.LatestPosts = LatestPosts;
const PostByHash = async (hash) => {
    return await prisma.posts.findUnique({
        where: {
            hash: hash,
        },
        select: {
            hash: true,
            publish: true,
            content: true,
            user: {
                select: {
                    first_name: true,
                    last_name: true,
                    email: true,
                    hash: true,
                },
            },
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                    hash: true,
                },
            },
            comments: {
                select: {
                    comment: true,
                    createdAt: true,
                    hash: true,
                    user: {
                        select: {
                            first_name: true,
                            last_name: true,
                            hash: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
};
exports.PostByHash = PostByHash;
const UserSpecificPosts = async (userId) => {
    return await prisma.posts.findMany({
        where: {
            userId: userId,
        },
        select: {
            hash: true,
            publish: true,
            content: true,
            user: {
                select: {
                    first_name: true,
                    last_name: true,
                    email: true,
                    hash: true,
                },
            },
            createdAt: true,
            like: {
                select: {
                    userId: true,
                    postId: true,
                    createdAt: true,
                    hash: true,
                },
            },
            comments: {
                select: {
                    comment: true,
                    createdAt: true,
                    hash: true,
                    user: {
                        select: {
                            first_name: true,
                            last_name: true,
                            hash: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
};
exports.UserSpecificPosts = UserSpecificPosts;
