"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.deleteUser = exports.updateUser = exports.login = exports.isAuthenticated = exports.verifyUser = void 0;
const authentication_1 = require("../models/authentication");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUser = async (req, res) => {
    const token = req.headers.authorization;
    const userToken = await jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    const email = userToken.email;
    const user = await (0, authentication_1.VerifyData)(email);
    res.status(200).json({ user: user });
};
exports.verifyUser = verifyUser;
const isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ error: "unauthorized" });
    }
    else {
        try {
            const userToken = await jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (userToken) {
                next();
            }
            else {
                res.sendStatus(401);
            }
        }
        catch (error) {
            res.status(401).json({ error: "unauthorized" });
        }
    }
};
exports.isAuthenticated = isAuthenticated;
const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await (0, authentication_1.LoginData)(email);
        if (!user) {
            res.status(401).json({ error: "invalid username or password" });
        }
        else {
            const HashCompare = await bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (HashCompare) {
                const payload = { hash: user === null || user === void 0 ? void 0 : user.hash, email: user === null || user === void 0 ? void 0 : user.email };
                const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                    algorithm: "HS256",
                    expiresIn: "1hr",
                });
                res.status(200).json({ token: token });
            }
            else {
                res.status(401).json({ error: "invalid username or password" });
            }
        }
    }
    catch (error) {
        res.status(401).json({ error: "invalid username or password" });
    }
};
exports.login = login;
const updateUser = async (req, res) => {
    const hash = req.body.hash;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = await bcryptjs_1.default.hash(req.body.password, 10);
    try {
        const user = await (0, authentication_1.UpdateUser)(hash, firstName, lastName, password);
        res.status(200).json({ user: user });
    }
    catch (error) {
        res.status(400).json({ error: "your account not updated" });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const hash = req.body.hash;
    try {
        const user = await (0, authentication_1.DeleteUser)(hash);
        res.status(200).json({ user: user });
    }
    catch (error) {
        res.status(400).json({ error: "your account not deleted" });
    }
};
exports.deleteUser = deleteUser;
const register = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = await bcryptjs_1.default.hash(req.body.password, 10);
    try {
        const user = await (0, authentication_1.RegisterData)(firstName, lastName, email, password);
        res.status(201).json({ user: user });
    }
    catch (error) {
        res.status(400).json({ user: "user already exist" });
    }
};
exports.register = register;
