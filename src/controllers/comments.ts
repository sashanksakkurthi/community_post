import { Request, Response } from "express";
import {
  CreateComment,
  DeleteComments,
  UpdateComment,
} from "../models/comments";

export const createUserComment = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  const content = req.body.content;

  try {
    const comment = await CreateComment(postId, userId, content);
    res.status(201).json({ comment: comment });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  try {
    const deleted = await DeleteComments(hash);
    res.status(200).json({ deleted: deleted });
  } catch (error) {
    res.status(400).json({ error: "no comments founded" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  const content = req.body.content;

  try {
    const comment = await UpdateComment(hash, content);
    res.status(201).json({ comment: comment });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};
