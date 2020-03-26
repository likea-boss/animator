import Animator from "../src/core/Animator";
import Keyboard from "../src/core/Keyboard";

import Circle from "../src/figures/Circle";
import Color from "../src/figures/Color";
import Rect from "../src/figures/Rect";
import Point from "../src/figures/Point";
import Speed from "../src/figures/Speed";

const canvas: HTMLCanvasElement = document.createElement('canvas');
document.body.appendChild(canvas);
const animator: Animator = new Animator(canvas);

const c1: Circle = new Circle(50);
const c2: Circle = new Circle(40);
const rect: Rect = new Rect(100, 100, new Point(50, 50));

const keyboard = Keyboard.getInstance();
keyboard.addHandler(() => {
  rect.setSpeed(new Speed(0, -25));
}, { key: "ArrowUp" });
keyboard.addHandler(() => {
  rect.setSpeed(new Speed(0, 25));
}, { key: "ArrowDown" });
keyboard.addHandler(() => {
  rect.setSpeed(new Speed(-25, 0));
}, { key: "ArrowLeft" });
keyboard.addHandler(() => {
  rect.setSpeed(new Speed(25, 0));
}, { key: "ArrowRight" });

c1.setColor(new Color(255, 0, 0));
c2.setColor(new Color(0, 0, 225));
rect.setColor(new Color(0, 255, 0));

animator.addFigure(c1);
animator.addFigure(c2);
animator.addFigure(rect);

animator.start();

