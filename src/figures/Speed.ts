import BezierEasing from "bezier-easing";

import Point from "./Point";
import EventEmitter from "../services/EventEmitter";
import Base from "./Base";

export class Transition {
  constructor(cubicBezier: [number, number, number, number], duration: number, to: Point) {
    this.easingFunction = BezierEasing(...cubicBezier);
    this.target = to;
    this.duration = duration;
  }

  private readonly easingFunction: (k: number) => number;
  private readonly duration: number;
  private readonly target: Point;
  private startFrom?: number;
  private finished: boolean = false;

  calculateSpeed(currentSpeed: Point): Point {
    if (!this.startFrom) {
      this.startFrom = performance.now();
    }
    const xDelta = this.target.getX() - currentSpeed.getX();
    const yDelta = this.target.getY() - currentSpeed.getY();

    console.log(currentSpeed.print(), this.target.print(), xDelta, yDelta);

    const timeSpent = performance.now() - this.startFrom;
    let coefficient: number;
    if (timeSpent > this.duration) {
      this.finished = true;
      coefficient = this.easingFunction(1);
    } else {
      coefficient = this.easingFunction(timeSpent / this.duration);
    }

    return new Point(currentSpeed.getX() + (xDelta * coefficient), currentSpeed.getY() + (yDelta * coefficient));
  }

  getTargetSpeed(): Point {
    return this.target;
  }

  isFinished(): boolean {
    return this.finished;
  }
}

export default class Speed extends Base {
  private static ANIMATION_FINISHED(uuid: number): string {
    return `ANIMATION::FINISHED::${uuid}`;
  }

  constructor(x: number, y: number) {
    super();
    this.speed = new Point(x, y);
    this.lastTick = Date.now();
  }

  private speed: Point;
  private lastTick: number;
  private transition?: Transition;

  private resetTransitionIfFinished() {
    if (this.transition && this.transition.isFinished()) {
      this.speed = this.transition.getTargetSpeed();
      this.transition = undefined;
      EventEmitter.emit(Speed.ANIMATION_FINISHED(this.getUUID()), {});
    }
  }

  setSpeed(s: Point): this {
    this.speed = s;
    return this;
  }

  setTransition(t: Transition): this {
    this.transition = t;
    return this;
  }

  getDelta() {
    const prevLastTick: number = this.lastTick;
    this.lastTick = Date.now();
    const delta = (this.lastTick - prevLastTick) / 1000;

    let speed;

    if (this.transition) {
      speed = this.transition.calculateSpeed(this.speed);
      this.resetTransitionIfFinished();
    } else {
      speed = this.speed;
    }

    return new Point(speed.getX() * delta, speed.getY() * delta);
  }

  getName(): string {
    return "Core/Speed";
  }

  copy(): Speed {
    return new Speed(this.speed.getX(), this.speed.getY());
  }
}
