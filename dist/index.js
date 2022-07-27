"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./router/authentication"));
const posts_1 = __importDefault(require("./router/posts"));
const comment_1 = __importDefault(require("./router/comment"));
const likes_1 = __importDefault(require("./router/likes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", authentication_1.default);
app.use("/api/v1", posts_1.default);
app.use("/api/v1", comment_1.default);
app.use("/api/v1", likes_1.default);
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
