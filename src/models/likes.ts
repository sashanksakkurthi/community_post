import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateLike = async (postId: string, userId: string) => {
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

export const DeleteLike = async (hash: string) => {
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
