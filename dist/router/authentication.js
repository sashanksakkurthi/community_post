"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/authentication");
const router = express_1.default.Router();
router.post("/login/", authentication_1.login);
router.post("/register/", authentication_1.register);
router.post("/verify/", authentication_1.isAuthenticated, authentication_1.verifyUser);
router.post("/delete-user/", authentication_1.isAuthenticated, authentication_1.deleteUser);
router.post("/update-user/", authentication_1.isAuthenticated, authentication_1.updateUser);
exports.default = router;
