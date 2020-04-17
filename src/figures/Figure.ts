import { getUUID } from "../services/UUID";
import Color from "./Color";
import Point from "./Point";
import EventEmitter, { EmitMethod } from "../services/EventEmitter";
import Speed from "./Speed";
import Base from "./Base";

export default abstract class Figure extends Base {
  private static FIGURE_MOVE(uuid: number, name: string) {
    return `MOVE::FIGURE::${name}::${uuid}`;
  }

  protected color: Color = new Color(255, 255, 255);
  protected position: Point = new Point(0, 0);
  protected speed: Speed = new Speed(0, 0);

  abstract render(context: CanvasRenderingContext2D): void;
  abstract getName(): string;

  applySpeed() {
    const p: Point = this.speed.getDelta();
    this.position = new Point(this.position.getX() + p.getX(), this.position.getY() + p.getY());
    EventEmitter.emit(Figure.FIGURE_MOVE(this.getUUID(), this.getName()), {});
  }

  setColor(color: Color): this {
    this.color = color;
    return this;
  }

  setPosition(p: Point): this {
    this.position =  p;
    return this;
  }

  getSpeed(): Speed {
    return this.speed;
  }

  setSpeed(s: Speed): this {
    this.speed = s;
    return this;
  }
}
