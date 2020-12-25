import Project from "../model/Project.js";
import Observer from "./Observer.js";

export default class ProjectManager {
  private projects: Project[] = [];
  private observers: Observer[] = []
  private static projectManager: ProjectManager;

  private constructor() {}

  static getManager() {
    if (!this.projectManager) {
      this.projectManager = new ProjectManager();
    }
    return this.projectManager;
  }

  public addPrj(prj: Project) {
    this.projects.push(prj);

    this.observers.forEach((observer) => {
      observer.observe(this.projects)
    } )
  }

  public register(observer: Observer) {
    this.observers.push(observer)
  }
}
