import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserSpecificPosts = async (userId: string) => {
  const data = await prisma.posts.findMany({
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
        },
      },
      comments: {
        select: {
          comment: true,
          createdAt: true,
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
  return data;
};

export const PostByHash = async (hash: string) => {
  const data = await prisma.posts.findUnique({
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
        },
      },
      comments: {
        select: {
          comment: true,
          createdAt: true,
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
  return data;
};

export const CreatePost = async (userId: string, content: string) => {
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
        },
      },
      comments: {
        select: {
          comment: true,
          createdAt: true,
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
  return data;
};

export const DeletePost = async (hash: string) => {
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

export const UpdatePost = async (hash: string, content: string) => {
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
