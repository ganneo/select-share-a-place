import Project from "../model/Project.js";

export default class MaxField {
  constructor(public max: number, public fieldName: keyof Project) {}
}
