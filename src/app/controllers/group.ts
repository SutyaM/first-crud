import { Group } from "../models/group";
import { database } from "../../lib/database";
import { Request, Response, NextFunction } from "express";
import * as groupSerializer from "../serializers/group";

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  if(['admin', 'groupManager'].includes(res.locals.user.role)) {
    next();
  } else {
    res.sendStatus(403);
  }
}

export const index = async (req: Request, res: Response) => {
  const groups: Array<Group> = await database('groups').select();
  res.json(groupSerializer.index(groups));
};

export const show = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (typeof group !== 'undefined') {
      res.json(groupSerializer.show(group));
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
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
    res.sendStatus(201);
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (group) {
      const newGroup: Group = {
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        maximalSize: req.body.maximalSize
      }
      await database('groups').update(newGroup).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (group) {
      await database('groups').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};
