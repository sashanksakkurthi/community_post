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

export const deletePost = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  try {
    const post = DeletePost(hash);
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  const content = req.body.content;
  try {
    const post = UpdatePost(hash, content);
    res.status(200).json({ post: post });
  } catch (error) {
    res.status(400).json({ error: "post not founded" });
  }
};

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
