import { Request, Response, NextFunction } from "express";
import { User } from "../app/models/user";
import { database } from "./database";
import * as jwt from "jsonwebtoken";
import * as jwtConfig from '../../config/jwt.json'

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  if((req.path.endsWith('/user') || req.path.endsWith('/login')) && req.method === 'POST') {
    return next();
  }
  try {
    const token: string = req.headers.authorization.toString().split(' ')[1];
    const info = jwt.verify(token, jwtConfig.secret);
    const userId: number = info.userId;
    const user: User = await database('users').where({ id: userId }).first();
    res.locals.user = user;
    next();
  } catch(error) {
    console.log(error)
    res.sendStatus(401);
  }
};