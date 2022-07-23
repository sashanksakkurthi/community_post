import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const VerifyData = async (email: string) => {
  const data = await prisma.users.findUnique({
    where: {
      email: email,
    },
    select: {
      first_name: true,
      last_name: true,
      email: true,
    },
  });
  return {
    firstName: data?.first_name,
    lastName: data?.last_name,
    email: data?.email,
  };
};

const LoginData = async (email: string) => {
  const data = await prisma.users.findUnique({
    where: { email: email },
    select: {
      email: true,
      password: true,
      hash: true,
    },
  });
  return {
    email: data?.email,
    password: data?.password,
    hash: data?.hash,
  };
};

const RegisterData = async (
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
  });
  return {
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
  };
};

export { LoginData, RegisterData, VerifyData };
