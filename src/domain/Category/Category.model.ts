import { ICategory} from './Category.entity';
import { Group } from '../';

export class Category implements ICategory {
  #title: string;
  #type: string;
  #description : string;
  #groups: Array<Group>;
  
  constructor(args: ICategory) {
    this.#title = args.title;
    this.#type = args.type;
    this.#description = args.description;
    this.#groups = [...args.groups];
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

  public get groups() {
    return this.#groups;
  };
};

