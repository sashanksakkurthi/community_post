import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createComment = async (
  postId: string,
  userId: string,
  content: string
) => {
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
