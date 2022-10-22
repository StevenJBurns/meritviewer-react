import { Empire } from '../Empire';

export interface IMerit {
  rank: number,
  title: string,
  availability: Empire,
  completionRequirements: Record<string, number>,
  imagePath: string,
};
