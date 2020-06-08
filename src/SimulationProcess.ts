import { Simulate } from "./Simulate";
import { AnimalType } from "./Animal";
import { DisplayData } from "./DisplayData";

export class SimulationProcess {
  static process = (animals: AnimalType[]) => {
    const sickAnimalsSortedByAge = Simulate.getAmountOfSickAnimalsInSameAge(
      animals
    );

    const birth = animals
      .map((animal) => {
        return animal.pregnantPhase === 2
          ? Simulate.birth(sickAnimalsSortedByAge, animal)
          : animal;
      })
      .flat(2);

    const recovery = birth
      .map((animal) => {
        return animal.condition.health === "sick" &&
          animal.condition.phase === 2
          ? Simulate.recovery(animal)
          : animal;
      })
      .flat();

    const naturalDeath = recovery
      .map((animal) => {
        return Simulate.naturalDeath(animal);
      })
      .flat();

    const onTimePasses = naturalDeath.map((animal) => {
      return Simulate.onTimePasses(animal);
    });

    const pregnancy = onTimePasses.map((animal) => {
      return Simulate.getPregnant(animal);
    });

    DisplayData.formatSimulationResult(pregnancy);

    return pregnancy;
  };
}
