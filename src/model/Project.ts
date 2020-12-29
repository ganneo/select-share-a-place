import { ProjectType } from "../state/ProjectType.js";
import { NotNull, nthLetterIs } from "../util/Decorators.js";

export default class Project {
  public id: number = -1;

  @nthLetterIs(1, "l")
  @NotNull
  public title: string;
  @nthLetterIs(0, "n")
  @NotNull
  public description: string;
  @NotNull
  public numPeople: number;
  constructor(
    title: string,
    description: string,
    numPeople: number,
    public type: ProjectType
  ) {
    this.title = title;
    this.description = description;
    this.numPeople = numPeople;
  }

  public setId(id: number) {
    this.id = id;
  }
}
