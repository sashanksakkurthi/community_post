import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateComment = async (
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

export const GetComments = async (postId: string) => {
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

export const DeleteComments = async (hash: string) => {
  const data = prisma.comments.delete({
    where: {
      hash: hash,
    },
    select: {
      hash: true,
    },
  });
  return hash;
};

export const UpdateComment = async (hash: string, content: string) => {
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
