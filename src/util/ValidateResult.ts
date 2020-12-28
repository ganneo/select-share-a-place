import Project from "../model/Project.js";

export default class ValidateResult {
  constructor(public isValid: boolean, public fieldName?: keyof Project) {}
}
