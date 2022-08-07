"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserData = exports.UpdateUserData = exports.VerifyData = exports.LoginData = exports.RegisterData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterData = async (firstName, lastName, email, hashPassword) => {
    return await prisma.users.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashPassword,
        },
        select: {
            first_name: true,
            last_name: true,
            email: true,
        },
    });
};
exports.RegisterData = RegisterData;
const LoginData = async (email) => {
    return await prisma.users.findUnique({
        where: { email: email },
        select: {
            email: true,
            password: true,
            hash: true,
        },
    });
};
exports.LoginData = LoginData;
const VerifyData = async (email) => {
    return await prisma.users.findUnique({
        where: {
            email: email,
        },
        select: {
            first_name: true,
            last_name: true,
            email: true,
            hash: true,
        },
    });
};
exports.VerifyData = VerifyData;
const UpdateUserData = async (hash, firstName, lastName) => {
    return prisma.users.update({
        where: {
            hash: hash,
        },
        data: {
            first_name: firstName,
            last_name: lastName,
        },
        select: {
            first_name: true,
            last_name: true,
            hash: true,
        },
    });
};
exports.UpdateUserData = UpdateUserData;
const DeleteUserData = async (hash) => {
    prisma.users.delete({
        where: {
            hash: hash,
        },
    });
};
exports.DeleteUserData = DeleteUserData;
