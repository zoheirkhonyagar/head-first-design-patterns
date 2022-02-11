import { QuackBehavior } from "../interfaces/quackBehavior";

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("mute quacking ...");
  }
}
