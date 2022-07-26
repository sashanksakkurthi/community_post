import {
  createPost,
  LatestPosts,
  PostByHash,
  UserSpecificPosts,
} from "../models/posts";
import { Request, Response } from "express";

export const createUserPosts = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const content = req.body.content;

  try {
    const post = await createPost(userId, content);
    res.status(201).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};

export const deletePost = async (req: Request, res: Response) => {};

export const updatePost = async (req: Request, res: Response) => {};

export const getLatestPosts = async (req: Request, res: Response) => {
  const posts = await LatestPosts();
  res.status(200).json({ posts: posts });
};

export const getHashSpecificPosts = async (req: Request, res: Response) => {
  const hash = req.params.hashId;
  if (!hash) {
    res.status(400).json({ error: "Post not founded" });
  }
  try {
    const posts = await PostByHash(hash);
    res.status(200).json({ post: posts });
  } catch (error) {
    res.status(400).json({ error: "Post not founded" });
  }
};

export const getUserSpecificPosts = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const posts = await UserSpecificPosts(userId);
    res.status(200).json({ post: posts });
  } catch (error) {
    res.status(400).json({ error: "Posts not founded" });
  }
};
