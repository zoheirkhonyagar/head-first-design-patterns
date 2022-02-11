import { QuackBehavior } from "../interfaces/quackBehavior";

export class Quack implements QuackBehavior {
  quack(): void {
    console.log("quacking ...");
  }
}
