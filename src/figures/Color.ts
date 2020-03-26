export default class Color {
  constructor (r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  r: number;
  g: number;
  b: number;

  public print() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
