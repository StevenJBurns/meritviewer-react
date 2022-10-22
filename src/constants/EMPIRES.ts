import { Empire } from "../domain";

export const EMPIRES: Array<Empire> = [
  new Empire({
    shortTitle: 'NC',
    longTitle: 'New Conglomerate',
  }),
  new Empire({
    shortTitle: 'TR',
    longTitle: 'Terran Republic',
  }),
  new Empire({
    shortTitle: 'VS',
    longTitle: 'Vanu Sovereignty',
  }),
  new Empire({
    shortTitle: 'ALL',
    longTitle: 'All Empires',
  }),
];
