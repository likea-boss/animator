// export function Chain<T>(
//   target: T,
//   propertyName: string,
//   propertyDescriptor: PropertyDescriptor): TypedPropertyDescriptor<(...args: any[]) => T> {
//   const method = propertyDescriptor.value;
//
//   propertyDescriptor.value = function (...args: any[]) {
//     method.apply(this, args);
//
//     return target;
//   }
//   return propertyDescriptor;
// };
