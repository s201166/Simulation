import { data } from "./src/InitialData";
import { DisplayData } from "./src/DisplayData";
import { SimulationProcess } from "./src/SimulationProcess";

console.log("Initial values");
DisplayData.formatSimulationResult(data);

let animals = data;

for (let i = 1; i < 11; i++) {
  console.log(`Herd after ${i} year`);
  animals = SimulationProcess.process(animals);
}
