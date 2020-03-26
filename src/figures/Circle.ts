import Figure from "./Figure";
import Point from "./Point";

export default class Circle extends Figure {
  constructor(radius: number, point = new Point(0, 0)) {
    super();
    this.position = point;
    this.radius = radius;
  }

  private radius: number;

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI);
    context.fillStyle = this.color.print();
    context.fill();
  }

  public getName(): string {
    return "Circle";
  }
}
