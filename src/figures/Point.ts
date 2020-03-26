export default class Point {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  private x: number;
  private y: number;

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }
}
