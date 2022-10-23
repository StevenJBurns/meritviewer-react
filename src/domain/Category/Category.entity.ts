import { Group } from '../';

export interface ICategory {
  title: string;
  type: string;
  description: string;
  groups: Array<Group>,
};
