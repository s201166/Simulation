import { Simulate } from "./Simulate";
import { AnimalType } from "./Animal";
import { DisplayData } from "./DisplayData";

export class SimulationProcess {
  static process = (animals: AnimalType[]) => {
    const sickAnimalsSortedByAge = Simulate.getAmountOfSickAnimalsInSameAge(
      animals
    );

    const birth = animals.map((animal) => {
      return animal.pregnantPhase === 2
        ? Simulate.birth(sickAnimalsSortedByAge, animal)
        : animal;
    });
    //@ts-ignore
    const afterFlat = birth.flat(2);

    const recovery = afterFlat.map((animal) => {
      return animal.condition.health === "sick" && animal.condition.phase === 2
        ? Simulate.recovery(animal)
        : animal;
    });

    const flatRecovery = recovery.flat();

    const naturalDeath = flatRecovery.map((animal) => {
      return Simulate.naturalDeath(animal);
    });

    const flatNaturalDeath = naturalDeath.flat();

    const onTimePasses = flatNaturalDeath.map((animal) => {
      return Simulate.onTimePasses(animal);
    });
    const flatOnTimePasses = onTimePasses.flat();

    const pregnancy = flatOnTimePasses.map((animal) => {
      return Simulate.getPregnant(animal);
    });

    const flatternPregnancy = pregnancy.flat();

    DisplayData.formatSimulationResult(flatternPregnancy);

    return flatternPregnancy;
  };
}
