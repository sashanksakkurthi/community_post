import { NextFunction, Request, Response } from "express";
import {
  DeleteUser,
  LoginData,
  RegisterData,
  UpdateUser,
  VerifyData,
} from "../models/authentication";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyUser = async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  const userToken = await jwt.verify(token!, process.env.JWT_SECRET!);
  const email: string = (userToken as JwtPayload).email;
  const user = await VerifyData(email);
  res.status(200).json({ user: user });
};

// verify user
export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: "unauthorized" });
  } else {
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
  }
};

// login user
export const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    // get user information form models
    const user = await LoginData(email);

    // user did not exist send unauthorized as response
    if (!user) {
      res.status(401).json({ error: "invalid username or password" });
    } else {
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
    }
  } catch (error) {
    res.status(401).json({ error: "invalid username or password" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await UpdateUser(hash, firstName, lastName, password);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ error: "your account not updated" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const hash = req.body.hash;
  try {
    const user = await DeleteUser(hash);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ error: "your account not deleted" });
  }
};

// register New User
export const register = async (req: Request, res: Response) => {
  const firstName: string = req.body.firstName;
  const lastName: string = req.body.lastName;
  const email: string = req.body.email;
  const password: string = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await RegisterData(firstName, lastName, email, password);
    res.status(201).json({ user: user });
  } catch (error) {
    res.status(400).json({ user: "user already exist" });
  }
};
