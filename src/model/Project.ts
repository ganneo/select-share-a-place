import { ProjectType } from "../state/ProjectType.js";
import { Max, NotNull } from "../util/Decorators.js";

export default class Project {
  public id: number = -1;

  @Max(5)
  @NotNull
  public title: string;
  @Max(7)
  @NotNull
  public description: string;
  @Max(10)
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
