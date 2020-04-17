import Animator from "../src/core/Animator";
import Keyboard from "../src/core/Keyboard";

import Circle from "../src/figures/Circle";
import Color from "../src/figures/Color";
import Rect from "../src/figures/Rect";
import Point from "../src/figures/Point";
import Speed, {Transition} from "../src/figures/Speed";
import Sprite from "../src/figures/Sprite";
import AssetsLoader, { IImageAsset } from "../src/core/AssetsLoader";
import AnimatedSprite, { Animation } from "../src/figures/AnimatedSprite";

const run = async () => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  document.body.appendChild(canvas);
  const animator: Animator = new Animator(canvas);

  const assets: IImageAsset[] = await AssetsLoader.loadImages([
    "idle/tile000.png",
    "idle/tile001.png",
    "idle/tile002.png",
    "idle/tile003.png",
    "idle/tile004.png",
    "idle/tile005.png",
    "idle/tile006.png",
    "idle/tile007.png",
    "idle/tile008.png",
    "idle/tile009.png",
    "idle/tile010.png",
  ]);

  const asset: IImageAsset = await AssetsLoader.loadImage("idle/tile000.png");
  const idleAnimation: Animation = new Animation(5, assets);

  const c1: Circle = new Circle(50);
  const c2: Circle = new Circle(40);
  const rect: Rect = new Rect(48, 64, new Point(50, 50));
  const sprite: AnimatedSprite = new AnimatedSprite(48, 64);
  sprite.setAnimation("IDLE", idleAnimation);
  sprite.play("IDLE");

  const keyboard = Keyboard.getInstance();
  keyboard.addHandler(() => {
    sprite.setSpeed(new Speed(0, -25));
    sprite.stop();
  }, {key: "ArrowUp"});
  keyboard.addHandler(() => {
    sprite.setSpeed(new Speed(0, 25));
  }, {key: "ArrowDown"});
  keyboard.addHandler(() => {
    sprite.setSpeed(new Speed(-25, 0));
    sprite.play("IDLE");
  }, {key: "ArrowLeft"});
  keyboard.addHandler(() => {
    sprite.setSpeed(new Speed(25, 0));
  }, {key: "ArrowRight"});

  c1.setColor(new Color(255, 0, 0, 20));
  c2.setColor(new Color(0, 0, 225, 20));
  rect.setColor(new Color(0, 255, 0, 20));

  animator.addFigure(c1);
  animator.addFigure(c2);
  animator.addFigure(rect);
  animator.addFigure(sprite);

  animator.start();
}

run();

