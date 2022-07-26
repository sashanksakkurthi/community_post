import express, { IRouter } from "express";
import { isAuthenticated } from "src/controllers/authentication";
import { createUserComment } from "src/controllers/comments";

const router: IRouter = express.Router();

router.post("/comment/", isAuthenticated, createUserComment);

export default router;
