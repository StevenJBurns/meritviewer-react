import type { IEmpire } from './Empire.entity';

export class Empire implements IEmpire {
  #shortTitle;
  #longTitle;
  
  constructor(args: IEmpire) {
    this.#shortTitle = args.shortTitle;
    this.#longTitle = args.longTitle;
  };

  public get shortTitle() {
    return this.#shortTitle;
  };

  public get longTitle() {
    return this.#longTitle;
  };
};
