import type { Answer } from "../../types/global.types";
import {
  buildGuardFromInput,
  buildTilesFromInput,
  readDay6Input,
} from "./input/inputReader";
import { TopdownMap } from "./map/map";
import {
  runMapSimulation,
  runMapSimulationWithLoopDetection,
} from "./simulator/simulator";

export const part1 = async () => {
  const input = await readDay6Input();
  const tiles = buildTilesFromInput(input);
  const guard = buildGuardFromInput(input);

  const map = new TopdownMap(tiles, guard);
  await runMapSimulation(map);

  return map.countVisitedTiles();
};

export const part2 = async () => {
  const input = await readDay6Input();
  const tiles = buildTilesFromInput(input);
  const guard = buildGuardFromInput(input);

  // Perform initial run of the guard, extract its visit coordinates
  const map = new TopdownMap(tiles, guard);
  await runMapSimulation(map);
  const guardVisitPositions = map.getVisitedTilesIndices();

  // Test every visited position of the guard, by placing on that coordinate
  // a block, and running the simulation from the start. if the guard is stuck in a loop
  // in that simulation - mark it.
  const results = await Promise.all(
    guardVisitPositions.map(async (visitPos) => {
      const map = new TopdownMap(tiles, guard);
      map.setUserBlock(visitPos.row, visitPos.col);
      return runMapSimulationWithLoopDetection(map);
    })
  );

  // Return all coordinates that caused a loop in the map
  const blocksWithLoop = results.filter((isInLoop) => isInLoop).length;
  return blocksWithLoop;
};

export const day6: Answer = {
  day: 6,
  part1,
  part2,
};
