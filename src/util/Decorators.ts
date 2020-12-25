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
