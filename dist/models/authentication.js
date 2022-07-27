"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.DeleteUser = exports.RegisterData = exports.LoginData = exports.VerifyData = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const VerifyData = async (email) => {
    const data = await prisma.users.findUnique({
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
    return data;
};
exports.VerifyData = VerifyData;
const LoginData = async (email) => {
    const data = await prisma.users.findUnique({
        where: { email: email },
        select: {
            email: true,
            password: true,
            hash: true,
        },
    });
    return data;
};
exports.LoginData = LoginData;
const RegisterData = async (firstName, lastName, email, password) => {
    const data = await prisma.users.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        },
        select: {
            first_name: true,
            last_name: true,
            email: true,
        },
    });
    return data;
};
exports.RegisterData = RegisterData;
const DeleteUser = async (hash) => {
    const data = prisma.users.delete({
        where: {
            hash: hash,
        },
        select: {
            email: true,
            hash: true,
        },
    });
    return data;
};
exports.DeleteUser = DeleteUser;
const UpdateUser = async (hash, firstName, lastName, password) => {
    const data = prisma.users.update({
        where: {
            hash: hash,
        },
        data: {
            first_name: firstName,
            last_name: lastName,
            password: password,
        },
        select: {
            first_name: true,
            last_name: true,
            hash: true,
        },
    });
    return data;
};
exports.UpdateUser = UpdateUser;
