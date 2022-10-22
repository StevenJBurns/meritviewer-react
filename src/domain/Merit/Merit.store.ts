import { Merit } from './Merit.model';

export interface IMeritStore {
  merits: Array<Merit>;
  isPending: boolean;

  setInitialState(): Promise<Merit>;
  add(): () => void;
  update(): () => void;
  remove(): () => void;
};
