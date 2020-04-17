export default class Color {
  constructor (r: number, g: number, b: number, alpha: number = 100) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
  }
  r: number;
  g: number;
  b: number;
  alpha: number;

  print() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha / 100})`;
  }
}
