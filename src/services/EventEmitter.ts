const IS_DEBUG = true; // TODO Сделать возможность установки этих переменных
const LOG_FILTER = "ANIMATION";

const history: [number, string, object][] = []; // TODO придумать решение для сохранения истории получше
interface EventHandler {
  (data: object): void;
}

export default class EventEmitter {
  private static eventHandlers: { [key: string]: EventHandler[] } = {};

  private static sendEventToHandlers(eventName: string, data: object) { // TODO выглядит очень сомнительно
    const handlers: EventHandler[] = EventEmitter.eventHandlers[eventName];
    if (handlers) {
      handlers.forEach((handler: EventHandler) => handler(data));
    }
  }

  static emit(eventName: string, data: object) {
    history.push([Date.now(), eventName, data]);
    if (IS_DEBUG) {
      if ((LOG_FILTER && eventName.indexOf(LOG_FILTER) !== -1) || !LOG_FILTER) {
        console.log(eventName);
      }
    }

    setTimeout(EventEmitter.sendEventToHandlers, 0);
  }

  static on(eventName: string, cb: EventHandler) {
    const handlers: EventHandler[] = EventEmitter.eventHandlers[eventName];
    if (!handlers) {
      EventEmitter.eventHandlers[eventName] = [];
    }
    EventEmitter.eventHandlers[eventName].push(cb);
  }

  static off(eventName: string, cb: EventHandler) { // TODO сделать возможность отзыва хендлера

  }
}

export function EmitMethod(message: string, data: object, emitAfter: boolean = false): (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor) => PropertyDescriptor {
  return ( // TODO изпользовать дженерики
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor) => {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
      if (!emitAfter) {
        EventEmitter.emit(message, data);
      }

      const result = method.apply(this, args);

      if (emitAfter) {
        EventEmitter.emit(message, data);
      }

      return result;
    };

    return propertyDescriptor;
  }
};
