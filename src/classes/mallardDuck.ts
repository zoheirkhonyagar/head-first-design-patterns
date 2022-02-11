import { Duck } from "./duck";

export class MallardDuck extends Duck {
  constructor() {
    super({ name: "MallardDuck" });
  }

  display(): void {
    console.log(`Displaying ${this.name}`);
  }
}
