"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/authentication");
const comments_1 = require("../controllers/comments");
const router = express_1.default.Router();
router.post("/create-comment/", authentication_1.isAuthenticated, comments_1.createUserComment);
router.post("/delete-comment/", authentication_1.isAuthenticated, comments_1.deleteComment);
router.post("/update-comment/", authentication_1.isAuthenticated, comments_1.updateComment);
router.get("/get-comment/", authentication_1.isAuthenticated, comments_1.getComments);
exports.default = router;
