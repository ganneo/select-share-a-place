import Project from "../model/Project.js";
import MaxField from "./MaxField.js";
import ValidateResult from "./ValidateResult.js";

class Validator {
  private static validator: Validator;
  private notNullFields: (keyof Project)[] = [];
  private maxAmountFields: MaxField[] = [];
  private constructor() {}

  static getValidator() {
    if (!Validator.validator) {
      Validator.validator = new Validator();
    }

    return Validator.validator;
  }

  public regesterNotNull(propertyName: keyof Project): void {
    this.notNullFields.push(propertyName);
  }

  public regesterMaxAmount(maxField: MaxField): void {
    this.maxAmountFields.push(maxField);
  }

  public validateNotNull(prj: Project) {
    const nullField = this.notNullFields.find((field) => !prj[field]);
    if (nullField) {
      return new ValidateResult(false, nullField);
    }

    return new ValidateResult(true);
  }

  public validateMaxAmount(prj: Project) {
    const tooLongField = this.maxAmountFields.find((maxAmountField) => {
      const value = prj[maxAmountField.fieldName];
      if (typeof value === "string") {
        return value.length > maxAmountField.max;
      }

      if (typeof value === "number") {
        return value > maxAmountField.max;
      }
    });

    return new ValidateResult(!tooLongField, tooLongField?.fieldName);
  }
}

export const validator = Validator.getValidator();
