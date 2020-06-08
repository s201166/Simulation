import { AnimalType } from "./Animal";

type AggregationType = {
  age: number;
  healthy: number;
  healthyAndImmune: number;
  sickFirstPhase: number;
  sickSecondPhase: number;
};

export class DisplayData {
  static formatSimulationResult = (animals: AnimalType[]) => {
    console.table(
      animals.reduce(
        (aggregateData: AggregationType[], animal: AnimalType) => {
          // 0 -> immune == false
          // 1 -> just got it == false
          // 2 -> immune == true

          if (animal.condition.health === "healthy") {
            if (animal.condition.immune === 2)
              aggregateData[animal.age - 1].healthyAndImmune++;

            if (animal.condition.immune === 0)
              aggregateData[animal.age - 1].healthy++;
          } else {
            if (animal.condition.phase === 1)
              aggregateData[animal.age - 1].sickFirstPhase++;
            else aggregateData[animal.age - 1].sickSecondPhase++;
          }
          return aggregateData;
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
}
