import { ProjectType } from "../state/ProjectType.js";

export default class Project {
  public id: number = -1

  constructor(
    public title: string,
    public description: string,
    public numPeople: number,
    public type: ProjectType,
  ) {
  }

  public setId(id: number) {
    this.id = id
  }
}
