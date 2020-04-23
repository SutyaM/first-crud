import {Group} from '../models/group';
import {database} from '../../lib/database';
import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
  const groups: Array<Group> = await database('groups').select();
  res.json(groups);
};

export const show = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({id: req.params.id}).first();
    if (group) {
    res.json(group);
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
    const group: Group = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      maximalSize: req.body.maximalSize
    }
    await database('groups').insert(group);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({id: req.params.id}).first();
    if (group) {
      await database('groups').delete().where({id: req.params.id});
      res.sendStatus(204);
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  const group: Group = await database('groups').select().where({id: req.params.id}).first();
  try {
    if(group) {
    const newGroup: Group ={
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      maximalSize: req.body.maximalSize
  }
  await database('groups').update(newGroup).where({id: req.params.id});
  res.sendStatus(201);
} else {
  res.sendStatus(404);
}
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};