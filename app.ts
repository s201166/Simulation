import { AnimalType } from "./src/Animal";
import { data } from "./src/InitialData";
import { Simulate } from "./Simulate";

type smth = {
  age: number;
  healthy: number;
  healthyAndImmune: number;
  sickFirstPhase: number;
  sickSecondPhase: number;
};

const healthy = () => {};
const healthyAndImmune = () => {};
const sickFirstPhase = () => {};
const sickSecondPhase = () => {};

const formatData = (arr: any) => {
  console.table(
    arr.reduce(
      function (ageCounts: { [key: string]: number }, animal: AnimalType) {
        //if (animal.condition.healthy === false) ageCounts[animal.age]++;

        if (animal.condition.healthy) {
          //@ts-ignore
          if (animal.condition.immune) {
            //@ts-ignore
            ageCounts[animal.age - 1].healthyAndImmune++;
          } else {
            //@ts-ignore
            ageCounts[animal.age - 1].healthy++;
          }
        } else {
          //@ts-ignore
          if (animal.condition.phase == 1) {
            //@ts-ignore
            ageCounts[animal.age - 1].sickFirstPhase++;
          } else {
            //@ts-ignore
            ageCounts[animal.age - 1].sickSecondPhase++;
          }
        }

        //console.log(ageCounts);
        //  ageCounts[animal.age]++;

        return ageCounts;
      },
      [
        {
          age: 1,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 2,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 3,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 4,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 5,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 6,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
        {
          age: 7,
          healthy: 0,
          healthyAndImmune: 0,
          sickFirstPhase: 0,
          sickSecondPhase: 0,
        },
      ]
    )
  );
};

/*
const formatData = (arr: any) => {
  console.table(
    arr.reduce(
      function (ageCounts: { [key: string]: number }, animal: any) {
        //if (animal.condition.healthy === false) ageCounts[animal.age]++;
        ageCounts[animal.age]++;

        return ageCounts;
      },
      { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0 }
    )
  );
};
*/
const main = (animals: AnimalType[]) => {
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
    return animal.condition.healthy === false && animal.condition.phase === 2
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
  console.log(flatternPregnancy.length);
  formatData(flatternPregnancy);
  //console.table(flatternPregnancy);

  return flatternPregnancy;
};

formatData(data);
const result = main(data);
const result1 = main(result);
main(result1);
