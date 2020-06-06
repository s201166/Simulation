import { Animal, AnimalType } from "./Animal";

export class AnimalFactory {
  static createAnimals(amount: number, animal: AnimalType) {
    const animals: AnimalType[] = [];
    for (let i = 0; i < amount; i++) {
      animals.push(
        new Animal(animal.age, animal.condition, animal.pregnantPhase)
      );
    }
    return animals;
  }
}
