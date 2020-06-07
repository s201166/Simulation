import { Animal, AnimalType, Sick } from "./Animal";

export class Simulate {
  static random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  static probability = (n: number) => Math.random() < n;

  static getAmountOfSickAnimalsInSameAge(animals: AnimalType[]) {
    return animals.reduce(
      function (ageCounts: { [key: string]: number }, animal) {
        if (animal.condition.healthy === false) ageCounts[animal.age]++;

        return ageCounts;
      },
      { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0 }
    );
  }

  static birth(ages: any, animal: AnimalType) {
    const data = [
      new Animal(animal.age, animal.condition, (animal.pregnantPhase = 0)),
    ];

    if (animal.condition.healthy === false) {
      if (Simulate.probability(ages[animal.age] * 0.01))
        data.push(new Animal(0, { healthy: false, phase: 1 }, 0));
      else data.push(new Animal(0, { healthy: true, immune: 0 }, 0));
    } else data.push(new Animal(0, { healthy: true, immune: 0 }, 0));

    return [...data];
  }

  static getPregnant(animal: AnimalType) {
    if (animal.age >= 2 && animal.age <= 4) {
      if (Simulate.probability(Simulate.random(13, 18) * 0.01))
        return new Animal(
          animal.age,
          animal.condition,
          (animal.pregnantPhase = 1)
        );
    }

    if (animal.age > 4)
      if (Simulate.probability(Simulate.random(9, 12) * 0.01))
        return new Animal(
          animal.age,
          animal.condition,
          (animal.pregnantPhase = 1)
        );

    return animal;
  }

  static recovery(animal: AnimalType) {
    if (!!Simulate.random(0, 2))
      return new Animal(
        animal.age,
        { healthy: true, immune: 1 },
        animal.pregnantPhase
      );

    return [];
  }

  static naturalDeath(animal: AnimalType) {
    if (animal.age >= 1 && animal.age <= 3) {
      if (Simulate.probability(Simulate.random(15, 26) * 0.01)) return [];
    }
    if (animal.age >= 4 && animal.age <= 5) {
      if (Simulate.probability(Simulate.random(23, 38) * 0.01)) return [];
    }

    if (animal.age === 6) {
      if (Simulate.probability(Simulate.random(35, 66) * 0.01)) return [];
    }

    if (animal.age === 7) return [];

    return animal;
  }

  static getOlder(age: number) {
    return age + 1;
  }

  static onTimePasses(animal: AnimalType) {
    const age = Simulate.getOlder(animal.age);
    let pregnantPhase = animal.pregnantPhase;
    let condition = animal.condition.healthy;
    if (pregnantPhase > 0) pregnantPhase++;

    if (condition) {
      //@ts-ignore
      let immune = animal.condition.immune;

      if (immune == 2)
        return new Animal(age, { healthy: true, immune: 0 }, pregnantPhase);

      if (immune == 0)
        return new Animal(
          age, //@ts-ignore
          { healthy: true, immune: 0 },
          pregnantPhase
        );
      //1 OK
      return new Animal(
        age, //@ts-ignore
        { healthy: true, immune: immune + 1 },
        pregnantPhase
      );
    }
    //@ts-ignore
    const sickPhase = Number(animal.condition.phase) + 1;

    return new Animal(age, { healthy: false, phase: sickPhase }, pregnantPhase);
  }
}
