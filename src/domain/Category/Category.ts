import { Merit } from '../Merit';

interface ICategory {
  title: string;
  type: string;
  description: string;
  merits: Array<Merit>,
};

export class Category implements ICategory {
  #title: string;
  #type: string;
  #description : string;
  #merits: Array<Merit>;
  
  constructor(args: ICategory) {
    this.#title = args.title;
    this.#type = args.type;
    this.#description = args.description;
    this.#merits = [...args.merits];
  };

  public get title() {
    return this.#title;
  };

  public get type() {
    return this.#type;
  };

  public get description() {
    return this.#description;
  };

  public get merits() {
    return this.#merits;
  };
};
