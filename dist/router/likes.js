"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const likes_1 = require("../controllers/likes");
const authentication_1 = require("../controllers/authentication");
const router = express_1.default.Router();
router.post("/create-like/", authentication_1.isAuthenticated, likes_1.createLike);
router.post("/delete-like/", authentication_1.isAuthenticated, likes_1.deleteLike);
exports.default = router;
