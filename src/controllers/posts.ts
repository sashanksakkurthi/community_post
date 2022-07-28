import {
  CreatePost,
  DeletePost,
  LatestPosts,
  PostByHash,
  UpdatePost,
  UserSpecificPosts,
} from "../models/posts";
import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  const userId = req.body.userId;
  const content = req.body.content;

  try {
    const post = await CreatePost(userId, content);
    res.status(201).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "login again" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  const content = req.body.content;
  try {
    const post = await UpdatePost(hash, content);
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  try {
    const post = DeletePost(hash);
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};

export const getLatestPosts = async (req: Request, res: Response) => {
  try {
    const posts = await LatestPosts();
    res.status(200).json({ posts: posts });
  } catch (error) {
    res.status(400).json({ error: "unable to get posts" });
  }
};

export const getHashSpecificPosts = async (req: Request, res: Response) => {
  const hash = req.params.hashId;
  if (!hash) {
    res.status(400).json({ error: "Post not founded" });
  } else {
    try {
      const posts = await PostByHash(hash);
      res.status(200).json({ post: posts });
    } catch (error) {
      res.status(400).json({ error: "Post not founded" });
    }
  }
};

export const getUserSpecificPosts = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  if (!userId) {
    res.status(400).json({ error: "User Posts not founded" });
  } else {
    try {
      const posts = await UserSpecificPosts(userId);
      res.status(200).json({ post: posts });
    } catch (error) {
      res.status(400).json({ error: "User Posts not founded" });
    }
  }
};
