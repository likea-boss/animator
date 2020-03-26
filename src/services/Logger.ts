const IS_DEBUG = true;
const FILTER = "MOVE";

export default class Logger {
  public static log(message: string): void {
    if (IS_DEBUG) {
      if ((FILTER && message.indexOf(FILTER) !== -1) || !FILTER) {
        console.log(message);
      }
    }
  }
}

export function LogMethod(message: string, callAfter: boolean = false): (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor) => PropertyDescriptor {
  return (
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor) => {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
      if (!callAfter) {
        Logger.log(message);
      }

      const result = method.apply(this, args);

      if (callAfter) {
        Logger.log(message);
      }

      return result;
    };

    return propertyDescriptor;
  }
};
