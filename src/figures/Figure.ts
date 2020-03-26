import { getUUID } from "../services/UUID";
import Color from "./Color";
import Point from "./Point";
import Logger, { LogMethod } from "../services/Logger";
import Speed from "./Speed";

export default abstract class Figure {
  private static FIGURE_MOVE(uuid: number, name: string) {
    return `MOVE::FIGURE::${name}::${uuid}`;
  }

  private UUID: number = getUUID();
  protected color: Color = new Color(255, 255, 255);
  protected position: Point = new Point(0, 0);
  protected speed: Speed = new Speed(0, 0);

  public applySpeed() {
    const p: Point = this.speed.getDelta();
    this.position = new Point(this.position.getX() + p.getX(), this.position.getY() + p.getY());
    Logger.log(Figure.FIGURE_MOVE(this.getUUID(), this.getName()));
  }

  public abstract render(context: CanvasRenderingContext2D): void;

  public setColor(color: Color) {
    this.color = color;
  }

  public setPosition(p: Point) {
    this.position =  p;
  }

  public setSpeed(s: Speed) {
    this.speed = s;
  }

  public getUUID(): number {
    return this.UUID;
  }

  public abstract getName(): string;
}
