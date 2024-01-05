// Convert the UML image to Typescript class. use number for double
class Circle {
  private radius: number;
  private color: string;

  constructor(radius: number = 1.0, color: string = "red") {
      this.radius = radius;
      this.color = color;
  }

  getRadius(): number {
      return this.radius;
  }

  setRadius(radius: number): void {
      this.radius = radius;
  }

  getColor(): string {
      return this.color;
  }

  setColor(color: string): void {
      this.color = color;
  }

  toString(): string {
      return `Circle [radius=${this.radius}, color=${this.color}]`;
  }

  getArea(): number {
      return Math.PI * this.radius * this.radius;
  }

  getCircumference(): number {
      return 2 * Math.PI * this.radius;
  }
}


const circle1 = new Circle(); 
const circle2 = new Circle(2.5); 
const circle3 = new Circle(3.0, "blue"); 

console.log(circle1.toString())
console.log(circle2.getArea()); 
console.log(circle3.getColor()); 