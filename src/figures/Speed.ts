import Point from "./Point";

export default class Speed {
  constructor(x: number, y: number) {
    this.speed = new Point(x, y);
    this.lastTick = Date.now();
  }

  private speed: Point;
  private lastTick: number;

  setSpeed(s: Point) {
    this.speed = s;
  }
  getDelta() {
    const prevLastTick: number = this.lastTick;
    this.lastTick = Date.now();
    const delta = (this.lastTick - prevLastTick) / 1000;

    return new Point(this.speed.getX() * delta, this.speed.getY() * delta);
  }
}
