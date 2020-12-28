import Project from "../model/Project.js";
import MaxField from "./MaxField.js";
import { validator } from "./Validator.js";

export function AutoBind(
  _: object,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const newDescriptior: PropertyDescriptor = {
    configurable: descriptor.configurable,
    get() {
      return originalMethod.bind(this);
    },
  };
  return newDescriptior;
}

export function NotNull(_: object, name: keyof Project): void {
  validator.regesterNotNull(name);
}

export function Max(maxAmount: number) {
  return function (_: object, name: keyof Project) {
    validator.regesterMaxAmount(new MaxField(maxAmount, name));
  };
}
