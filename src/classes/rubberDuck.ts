import { Duck } from "./duck";

export class RubberDuck extends Duck {
  constructor() {
    super({ name: "RubberDuck" });
  }

  display(): void {
    console.log(`Displaying ${this.name}`);
  }
}
