"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.isAuthenticated = exports.verifyUser = exports.login = exports.register = void 0;
const authentication_1 = require("../models/authentication");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = async (req, res) => {
    const { firstName, lastName, email, password, } = req.body;
    const hashPassword = await bcryptjs_1.default.hash(password, 10);
    try {
        const user = await (0, authentication_1.RegisterData)(firstName, lastName, email, hashPassword);
        res.status(201).json({ user: user });
    }
    catch (error) {
        res.sendStatus(400);
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await (0, authentication_1.LoginData)(email);
        if (!user) {
            res.sendStatus(401);
        }
        else {
            const compareHashPassword = await bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (compareHashPassword) {
                const payload = {
                    hash: user === null || user === void 0 ? void 0 : user.hash,
                    email: user === null || user === void 0 ? void 0 : user.email,
                };
                const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                    algorithm: "HS256",
                    expiresIn: "1hr",
                });
                res.status(200).json({ token: token });
            }
            else {
                res.sendStatus(401);
            }
        }
    }
    catch (error) {
        res.sendStatus(401);
    }
};
exports.login = login;
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
        res.sendStatus(401);
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
            res.sendStatus(401);
        }
    }
};
exports.isAuthenticated = isAuthenticated;
const updateUser = async (req, res) => {
    const hash = req.body.hash;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    try {
        const user = await (0, authentication_1.UpdateUserData)(hash, firstName, lastName);
        res.status(200).json({ user: user });
    }
    catch (error) {
        res.status(400);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const hash = req.body.hash;
    try {
        await (0, authentication_1.DeleteUserData)(hash);
        res.status(200);
    }
    catch (error) {
        res.status(400);
    }
};
exports.deleteUser = deleteUser;
