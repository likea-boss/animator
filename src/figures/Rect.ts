import Figure from "./Figure";
import Point from "./Point";

export default class Rect extends Figure {
  constructor(width: number, height: number, point = new Point(0, 0)) {
    super();
    this.position = point;
    this.width = width;
    this.height = height;
  }

  private width: number;
  private height: number;

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color.print();
    context.fillRect(this.position.getX(), this.position.getY(), this.width, this.height);
  }

  public getName(): string {
    return "Rect";
  }
}
