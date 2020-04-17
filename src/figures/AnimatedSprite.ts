import Figure from "./Figure";
import { IImageAsset } from "../core/AssetsLoader";

export class Animation {
  constructor(interval: number, frames: IImageAsset[]) {
    this.interval = interval;
    this.frames  = frames;
  }

  private interval: number;
  private frames: IImageAsset[];
  private currentFrameIndex: number = 0;
  private currentFrameCount: number = 0;

  private updateCurrentFrameIFNeeded() {
    this.currentFrameCount++;
    if (this.currentFrameCount > this.interval) {
      this.currentFrameCount = 0;
      this.currentFrameIndex++;
      if (this.currentFrameIndex >= this.frames.length) {
        this.currentFrameIndex = 0;
      }
    }
  }

  getCurrentFrame(isPlaying: boolean): IImageAsset {
    if (isPlaying) {
      this.updateCurrentFrameIFNeeded();
    }
    return this.frames[this.currentFrameIndex];
  }

  reset() {
    this.currentFrameIndex = 0;
    this.currentFrameCount = 0;
  }
}

export default class AnimatedSprite extends Figure {
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  private animations: { [key: string]: Animation } = {};
  private currentAnimation: string = "";

  private width: number;
  private height: number;

  private isPlaying: boolean = false;

  private resetCurrentAnimation() {
    const currentAnimation = this.animations[this.currentAnimation];
    if (currentAnimation) {
      currentAnimation.reset();
    }
  }

  render(context: CanvasRenderingContext2D) {
    if (this.currentAnimation) {
      const currentFrame = this.animations[this.currentAnimation].getCurrentFrame(this.isPlaying);
      if (currentFrame) {
        context.imageSmoothingEnabled = false;
        context.drawImage(currentFrame.image, this.position.getX(), this.position.getY(), this.width, this.height);
      }
    }
  }

  getName(): string {
    return "AnimatedSprite";
  }

  setAnimation(n: string, a: Animation): this {
    this.animations[n] = a;

    // return new AnimatedSprite(10, 10);
    return this;
  }

  play(animationName: string, shouldReset: boolean = false) {
    if (animationName === this.currentAnimation && shouldReset) {
      this.resetCurrentAnimation();
    }
    this.currentAnimation = animationName;
    this.isPlaying = true;
  }

  stop(shouldReset: boolean = false) {
    if (shouldReset) {
      this.resetCurrentAnimation();
    }
    this.isPlaying = false;
  }
}
