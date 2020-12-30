import Project from "../model/Project";

export default interface Observer {
  observe(prjs: Project[]): void;
}
