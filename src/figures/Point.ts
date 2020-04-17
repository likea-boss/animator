export default class Point {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private x: number;
  private y: number;

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  print(): string {
    return `(${this.x},${this.y})`;
  }
}
