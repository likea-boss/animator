import Figure from "../figures/Figure";
import Logger, { LogMethod } from "../services/Logger";
import Color from "../figures/Color";

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

  @LogMethod(Animator.ANIMATOR_START_FRAME)
  @LogMethod(Animator.ANIMATOR_END_FRAME, true)
  private tick() {
    if (this.isRunning) {
      this.clearCanvas();
      this.renderAll();
    }
  }

  private renderAll() {
    this.figures.forEach((f: Figure) => {
      if (this.context) {
        f.applySpeed()
        f.render(this.context);
        Logger.log(Animator.RENDER_FIGURE(f.getUUID(), f.getName()));
      }
    });
  }

  @LogMethod(Animator.ANIMATOR_CLEAR_CANVAS, true)
  private clearCanvas() {
    if (this.context) {
      this.context.fillStyle = new Color(255, 255, 255).print();
      this.context.fillRect(0, 0, 1000, 1000); //  TODO брать реальный размер из DOM
    }
  }

  @LogMethod(Animator.ANIMATOR_START, true)
  public start() {
    this.isRunning = true;
  }

  @LogMethod(Animator.ANIMATOR_STOP, true)
  public stop() {
    this.isRunning = false;
  }

  public addFigure(f: Figure) {
    this.figures.push(f);
    Logger.log(Animator.ADD_FIGURE(f.getUUID(), f.getName()));
  }
}
