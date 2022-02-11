export abstract class Duck {
  public name: string;

  constructor(input?: { name: string }) {
    this.name = input?.name || "duck";
  }

  swim(): void {
    console.log(`${this.name} is swimming ...`);
  }

  abstract display(): void;
}
