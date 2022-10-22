import { Empire } from '../Empire';

interface IMerit {
  rank: number,
  title: string,
  availability: Empire,
  completionRequirements: Record<string, number>,
  imagePath: string,
};

export class Merit implements IMerit {
  #rank;
  #title;
  #availability;
  #completionRequirements: Record<string, number>;
  #imageFileName: string = '';
  
  constructor(args: IMerit) {
    this.#rank = args.rank;
    this.#title = args.title;
    this.#availability = args.availability;
    this.#completionRequirements = args.completionRequirements;
    this.#imageFileName = args.imagePath;
  };

  public get rank() {
    return this.#rank;
  };

  public get title() {
    return this.#title;
  };

  public get availability() {
    return this.#availability;
  };

  public get imagePath() {
    return this.#imageFileName;
  };

  public get completionRequirements() {
    return this.#completionRequirements;
  };
};
