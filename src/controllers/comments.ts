import { Request, Response } from "express";
import { createComment } from "../models/comments";

const createUserComment = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  const content = req.body.content;

  try {
    const comment = await createComment(postId, userId, content);
    res.status(201).json({ comment: comment });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};

const getComment = async (req: Request, res: Response) => {};

const deleteComment = async (req: Request, res: Response) => {};

const updateComment = async (req: Request, res: Response) => {};

export { createUserComment };
