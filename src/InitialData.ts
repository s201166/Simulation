import { AnimalFactory } from "./AnimalFactory";
import { AnimalType } from "./Animal";

export const data: AnimalType[] = [
  ...AnimalFactory.createAnimals(60, {
    age: 1,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),
  ...AnimalFactory.createAnimals(20, {
    age: 1,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),
  ...AnimalFactory.createAnimals(10, {
    age: 1,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 1,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(60, {
    age: 2,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(30, {
    age: 2,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 2,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(20, {
    age: 2,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(70, {
    age: 3,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 3,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(5, {
    age: 3,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 3,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(60, {
    age: 4,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 4,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 4,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(5, {
    age: 4,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(20, {
    age: 5,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(20, {
    age: 5,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(7, {
    age: 5,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(3, {
    age: 5,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 6,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(5, {
    age: 6,
    condition: { healthy: true, immune: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(6, {
    age: 6,
    condition: { healthy: false, phase: 1 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(4, {
    age: 6,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(10, {
    age: 7,
    condition: { healthy: true, immune: 0 },
    pregnantPhase: 0,
  }),

  ...AnimalFactory.createAnimals(3, {
    age: 7,
    condition: { healthy: false, phase: 2 },
    pregnantPhase: 0,
  }),
];
