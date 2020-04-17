import {getUUID} from "../services/UUID";

export default abstract class Base {
  private readonly UUID: number = getUUID();

  abstract getName(): string;
  abstract copy(): Base;

  getUUID(): number {
    return this.UUID;
  }
}
