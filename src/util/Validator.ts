import ValidateItem from "./ValidateItem.js";
import ValidateResult from "./ValidateResult.js";

class Validator {
  private static validator = new Validator();
  private validateMap: Map<string, ValidateItem[]> = new Map();

  private constructor() {}

  static getValidator() {
    return this.validator;
  }

  public register(constructorName: string, validateItem: ValidateItem): void {
    if (!this.validateMap.has(constructorName)) {
      this.validateMap.set(constructorName, []);
    }

    this.validateMap.get(constructorName)!.push(validateItem);
  }

  public validate(obj: any): ValidateResult {
    if (!this.validateMap.has(obj.constructor.name)) {
      return new ValidateResult(true);
    }

    const validateItems = this.validateMap.get(obj.constructor.name)!;
    const failedItem = validateItems.find(
      (validateItem) =>
        !validateItem.validateFunction(obj[validateItem.fieldName])
    );

    return new ValidateResult(!failedItem, failedItem?.fieldName);
  }
}

export const validator = Validator.getValidator();
