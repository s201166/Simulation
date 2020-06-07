export type AnimalType = {
  age: number;
  condition: AnimalCondition;
  pregnantPhase: number;
};

type AnimalCondition = Healthy | Sick;

type Healthy = {
  health: "healthy";
  immune: number;
};

type Sick = {
  health: "sick";
  phase: number;
};

export class Animal implements AnimalType {
  age: number;
  condition: AnimalCondition;
  pregnantPhase: number;

  constructor(age: number, condition: AnimalCondition, pregnantPhase: number) {
    this.age = age;
    this.condition = condition;
    this.pregnantPhase = pregnantPhase;
  }
}
