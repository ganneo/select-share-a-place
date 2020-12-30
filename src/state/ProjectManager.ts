import Project from "../model/Project";
import Observer from "./Observer";
import { ProjectType } from "./ProjectType";

export default class ProjectManager {
  private projects: Project[] = [];
  private observers: Observer[] = [];
  private static projectManager: ProjectManager;
  private prjId: number = 0;

  private constructor() {}

  static getManager() {
    if (!this.projectManager) {
      this.projectManager = new ProjectManager();
    }
    return this.projectManager;
  }

  public addPrj(prj: Project) {
    prj.setId(this.prjId++);
    this.projects.push(prj);

    this.notify();
    return prj;
  }

  public register(observer: Observer) {
    this.observers.push(observer);
  }

  public updatePrj(id: number, prjType: ProjectType) {
    const oldPrj = this.projects.find((prj) => prj.id === id)!;
    if (oldPrj.type !== prjType) {
      oldPrj.type = prjType;
      this.notify();
    }
  }

  private notify() {
    this.observers.forEach((observer) => {
      observer.observe([...this.projects]);
    });
  }
}
