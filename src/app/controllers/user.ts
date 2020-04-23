import {User} from '../models/user';
import {database} from '../../lib/database';
import { Request, Response} from 'express';

export const index = async (req: Request, res: Response) => {
  const users: Array<User> = await database('users').select();
  res.json(users);
};

export const show = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({id: req.params.id}).first();
    if (user) {
    res.json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const user: User ={
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age
    }
    await database('users').insert(user);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  const user: User = await database('users').select().where({id: req.params.id}).first();
  try {
    if(user) {
    const newUser: User ={
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age
  }
  await database('users').update(newUser).where({id: req.params.id});
  res.sendStatus(201);
} else {
  res.sendStatus(404);
}
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({id: req.params.id}).first();
    if (user) {
      await database('users').delete().where({id: req.params.id});
      res.sendStatus(204);
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};