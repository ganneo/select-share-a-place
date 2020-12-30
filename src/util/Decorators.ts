import ValidateItem from "./ValidateItem";
import { validator } from "./Validator";

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

export function NotNull(target: object, name: string): void {
  validator.register(
    target.constructor.name,
    new ValidateItem(name, (validateValue) => validateValue)
  );
}

export function nthLetterIs(position: number, nthLetter: string) {
  return function (target: object, name: string) {
    validator.register(
      target.constructor.name,
      new ValidateItem(name, (validateValue) => {
        if (validateValue[position]) {
          return validateValue[position] === nthLetter;
        }

        return false;
      })
    );
  };
}
