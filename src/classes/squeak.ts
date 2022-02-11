import { QuackBehavior } from "../interfaces/quackBehavior";

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeaking ...");
  }
}
