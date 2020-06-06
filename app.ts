import { AnimalType } from "./src/Animal";
import { data } from "./src/InitialData";
import { Simulate } from "./src/Simulate";

const formatData = (arr: any) => {
  console.table(
    arr.reduce(
      function (ageCounts: { [key: string]: number }, animal: AnimalType) {
        // 0 -> immune == false
        // 1 -> just got it == false
        // 2 -> immune == true
        if (animal.condition.healthy) {
          //@ts-ignore
          if (animal.condition.immune == 2) {
            //@ts-ignore
            ageCounts[animal.age - 1].healthyAndImmune++;
          } else {
            //@ts-ignore
            if (animal.condition.immune == 0) {
              //@ts-ignore
              ageCounts[animal.age - 1].healthy++;
            }
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
    //@ts-ignore
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
  // console.log(flatternPregnancy);
  formatData(flatternPregnancy);

  return flatternPregnancy;
};

console.log("Initial values");
formatData(data);

let animals = data;

for (let i = 1; i < 11; i++) {
  console.log(`Herd after ${i} year`);
  animals = main(animals);
}
