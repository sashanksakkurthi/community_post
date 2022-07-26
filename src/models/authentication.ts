import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const VerifyData = async (email: string) => {
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

export const LoginData = async (email: string) => {
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

export const RegisterData = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
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
