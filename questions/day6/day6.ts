import type { Answer } from "../../types/global.types";
import {
  buildGuardFromInput,
  buildMatrixFromInput,
  readDay6Input,
} from "./input/inputReader";
import { TopdownMap } from "./map/map";
import { runMapSimulation } from "./simulator/simulator";

export const part1 = async () => {
  const input = await readDay6Input();
  const tiles = buildMatrixFromInput(input);
  const guard = buildGuardFromInput(input);

  const map = new TopdownMap(tiles, guard);
  await runMapSimulation(map);

  return map.countVisitedTiles();
};

export const part2 = async () => {
  const input = await readDay6Input();
  const tiles = buildMatrixFromInput(input);
  const guard = buildGuardFromInput(input);

  const map = new TopdownMap(tiles, guard);
  await runMapSimulation(map);
  const originalVisitCords = map.getVisitedTilesIndices();

  await map.runSimulation(false);
  // const originalVisitCords = map.getVisitedTilesIndices();
  // console.log(originalVisitCords);
  // map.resetMap(tiles, guard);
  // return 0;
  return 0;
};

export const day6: Answer = {
  day: 6,
  part1,
  part2,
};
