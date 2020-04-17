import Figure from "./Figure";
import { IImageAsset } from "../core/AssetsLoader";

export interface ISprite {
  url: string;
}

export interface ISpriteOptions {
  interval: number;
}

export default class Sprite extends Figure { // TODO сделать возможность анимирования спрайта
  constructor(w: number, h: number,  a: IImageAsset) {
    super();
    this.width = w;
    this.height = h;
    this.asset = a;
  };

  private asset: IImageAsset;
  private width: number;
  private height: number;

  render(context: CanvasRenderingContext2D) {
    context.drawImage(this.asset.image, this.position.getX(), this.position.getY(), this.width, this.height);
  }

  getName(): string {
    return "Sprite";
  }
}
