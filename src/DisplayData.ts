import { AnimalType } from "./Animal";

export class DisplayData {
  static formatSimulationResult = (arr: any) => {
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
}
