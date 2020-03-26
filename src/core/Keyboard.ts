import Logger from "../services/Logger";

export enum STAGES { // TODO сделать что бы это было интегрированно в Keyboard
  KEY_UP,
  KEY_DOWN,
  KEY_PRESS,
}

export interface IKeyboardOptions {
  key: string;
  control?: boolean;
  option?: boolean;
  command?: boolean;
  super?: boolean;
  alt?: boolean;
  stages?: STAGES[];
}

interface IKeyboardHandler {
  handler: () => void,
  options: IKeyboardOptions,
}

export default class Keyboard {
  private static KEYBOARD_HANDLER_CALL_ERROR = "KEYBOARD::HANDLER_CALL::ERROR";
  private static instance?: Keyboard;

  public static getInstance(): Keyboard {
    if (!Keyboard.instance) {
      Keyboard.instance = new Keyboard();
    }
    return Keyboard.instance;
  }

  constructor() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  private handlers: IKeyboardHandler[] = [];

  private handleKeyPress(event: KeyboardEvent) {
    const handlersToCall: IKeyboardHandler[] = this.handlers.filter((h: IKeyboardHandler) => {
      return h.options.key === event.key;
    });

    handlersToCall.forEach((h: IKeyboardHandler) => {
      try {
        h.handler(); // TODO логировать каждый успешный вызов хендлера (в начале придумать как)
      } catch (e) {
        Logger.log(Keyboard.KEYBOARD_HANDLER_CALL_ERROR) // TODO добавить логеру метод для вывод ошибок
      }
    })
  }

  public addHandler(handler: () => void, options: IKeyboardOptions) {
    this.handlers.push({ handler, options });
  }

  public setAliases() { // TODO добавить алиасы для мета клавиш по типу alt option равны и при нажатии на alt вызываються все методы которые забинжены на option и наоборот

  }
}
