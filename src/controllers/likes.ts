import { Request, Response } from "express";
import { CreateLike, DeleteLike } from "../models/likes";

export const createLike = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const postId = req.body.postId;
  try {
    const like = await CreateLike(postId, userId);
    res.status(201).json({ like: like });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};

export const deleteLike = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  try {
    const like = await DeleteLike(hash);
    res.status(201).json({ like: like });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};
