import { IGroup } from './Group.entity';
import { Merit } from '../';

export class Group implements IGroup {
  #title: string;
  #type: string;
  #description : string;
  #merits: Array<Merit>;
  
  constructor(args: IGroup) {
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

