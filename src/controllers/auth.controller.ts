import { NextFunction, Request, Response } from "express";
import { LoginData, RegisterData } from "../models/auth.models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// verify user
const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: "unauthorized" });
  }
  try {
    const userToken = await jwt.verify(token!, process.env.JWT_SECRET!);

    if (userToken) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json({ error: "unauthorized" });
  }
};

// login user
const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  // get user information form models
  const user = await LoginData(email);

  // user did not exist send unauthorized as response
  if (!user) {
    res.status(401).json({ error: "invalid username or password" });
  }
  try {
    const HashCompare = await bcrypt.compare(password, user?.password!);
    if (HashCompare) {
      const payload = { hash: user?.hash, email: user?.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        algorithm: "HS256",
        expiresIn: "1hr",
      });
      res.status(200).json({ token: token });
    } else {
      res.status(401).json({ error: "invalid username or password" });
    }
  } catch (error) {
    res.status(401).json({ error: "invalid username or password" });
  }
};

// register New User
const register = async (req: Request, res: Response) => {
  const firstName: string = req.body.firstName;
  const lastName: string = req.body.lastName;
  const email: string = req.body.email;
  const password: string = await bcrypt.hash(req.body.password, 10);

  // send user data to create new user
  try {
    const user = await RegisterData(firstName, lastName, email, password);
    res.status(201).json({ user: user });
  } catch (error) {
    res.status(400).json({ user: "user already exist" });
  }
};

export { login, register, isAuthenticated };
