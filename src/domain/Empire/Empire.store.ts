import { Empire } from './Empire.model';

export interface IEmpireStore {
  merits: Array<Empire>;
  isPending: boolean;

  setInitialState(): Promise<Empire>;
  
  add(): () => void;
  update(): () => void;
  remove(): () => void;
};
