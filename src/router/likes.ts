import express, { IRouter } from "express";
import { createLike, deleteLike } from "../controllers/likes";
import { isAuthenticated } from "../controllers/authentication";

const router: IRouter = express.Router();

router.post("/create-like/", isAuthenticated, createLike);
router.post("/delete-like/", isAuthenticated, deleteLike);

export default router;
