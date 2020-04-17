import Figure from "../figures/Figure";
import EventEmitter, { EmitMethod } from "../services/EventEmitter";
import Color from "../figures/Color";

const SHOW_FPS = true;
let lastCalledTime: number;
let fps: number;

function show_fps(context: CanvasRenderingContext2D) { // TODO использовать компоненты для отрисовки FPS

  if(!lastCalledTime) {
    lastCalledTime = Date.now();
    fps = 0;
    return;
  }
  const delta = (Date.now() - lastCalledTime)/1000;
  lastCalledTime = Date.now();
  fps = 1/delta;

  if (SHOW_FPS) {
    context.fillStyle = "Black";
    context.font = "normal 16pt Arial";
    context.fillText(fps + " fps", 10, 26);
  }
}

export default class Animator {
  private static ANIMATOR_START = "ANIMATOR::START";
  private static ANIMATOR_STOP = "ANIMATOR::STOP";
  private static ANIMATOR_START_FRAME = "ANIMATOR::START_FRAME";
  private static ANIMATOR_CLEAR_CANVAS = "ANIMATOR::CLEAR_CANVAS";
  private static ANIMATOR_END_FRAME = "ANIMATOR::END_FRAME";
  private static ADD_FIGURE(figureUUID: number, name: string) {
    return `ADD_FIGURE::${name}::${figureUUID}`;
  }
  private static RENDER_FIGURE(figureUUID: number, name: string) {
    return `RENDER_FIGURE::${name}::${figureUUID}`;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.figures = [];
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.interval = setInterval(this.tick.bind(this), 1000 / 60) // interval for 60 fps
  }

  private interval: number;
  private isRunning: boolean = false;

  private figures: Figure[];
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;

  @EmitMethod(Animator.ANIMATOR_START_FRAME, {})
  @EmitMethod(Animator.ANIMATOR_END_FRAME, {},true)
  private tick() {
    if (this.isRunning) {
      this.clearCanvas();
      this.renderAll();
    }
  }

  private renderAll() {
    if (this.context) {
      this.figures.forEach((f: Figure) => {
        f.applySpeed();
        f.render(this.context!);
        EventEmitter.emit(Animator.RENDER_FIGURE(f.getUUID(), f.getName()), {});
      });
      show_fps(this.context);
    }
  }

  @EmitMethod(Animator.ANIMATOR_CLEAR_CANVAS, {}, true)
  private clearCanvas() {
    if (this.context) {
      this.context.fillStyle = new Color(255, 255, 255, 100).print();
      this.context.fillRect(0, 0, 1000, 1000); //  TODO брать реальный размер из DOM
    }
  }

  @EmitMethod(Animator.ANIMATOR_START, {}, true)
  start() {
    this.isRunning = true;
  }

  @EmitMethod(Animator.ANIMATOR_STOP, {}, true)
  stop() {
    this.isRunning = false;
  }

  addFigure(f: Figure) {
    this.figures.push(f);
    EventEmitter.emit(Animator.ADD_FIGURE(f.getUUID(), f.getName()), {});
  }
}
