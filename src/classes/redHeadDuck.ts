import { Duck } from "./duck";

export class RedHeadDuck extends Duck {
  constructor() {
    super({ name: "RedHeadDuck" });
  }

  display(): void {
    console.log(`Displaying ${this.name}`);
  }
}
