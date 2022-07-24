import { createPost, LatestPosts } from "../models/posts.models";
import { Request, Response } from "express";

const getLatestPosts = async (req: Request, res: Response) => {
  const posts = await LatestPosts();
  res.status(200).json({ posts: posts });
};

const createUserPost = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const content = req.body.content;

  try {
    const post = await createPost(userId, content);
    res.status(201).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};
export { getLatestPosts, createUserPost };
