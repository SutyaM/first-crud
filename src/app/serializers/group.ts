import { Group } from "../models/group";

export interface GroupSerializer {
  name: string;
  description: string;
  location: string;
  maximalSize: number;
}

export const show = (group: Group): GroupSerializer => {
  return {
    name: group.name,
    description: group.description,
    location: group.location,
    maximalSize: group.maximalSize
  }
};

export const index = (groups: Array<Group>): Array<GroupSerializer> => {
  return groups.map((group: Group) => show(group));
}