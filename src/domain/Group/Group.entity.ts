import { Merit } from '../';

export interface IGroup {
  title: string;
  type: string;
  description: string;
  merits: Array<Merit>;
};
