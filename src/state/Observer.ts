import Project from "../model/Project.js";

export default interface Observer{
    observe(prjs: Project[]): void
}