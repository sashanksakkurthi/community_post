import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserSpecificPosts = async (userId: string) => {
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

export const PostByHash = async (hash: string) => {
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

export const createPost = async (userId: string, content: string) => {
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

export const LatestPosts = async () => {
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
