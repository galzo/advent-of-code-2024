import type { Answer } from "../../types/global.types";
import { parseInputGuard, parseInputTiles, readDay6Input } from "./day6.utils";
import { TopdownMap } from "./map";

export const part1 = async () => {
  const input = await readDay6Input();
  const tiles = parseInputTiles(input);
  const guard = parseInputGuard(input);
  const map = new TopdownMap(tiles, guard);

  await map.runSimulation(false);
  return map.countVisitedTiles();
};

export const part2 = async () => {
  const input = await readDay6Input();
  const tiles = parseInputTiles(input);
  const guard = parseInputGuard(input);
  const map = new TopdownMap(tiles, guard);

  await map.runSimulation(false);
  const originalVisitCords = map.getVisitedTilesIndices();
  map.resetMap(tiles, guard);

  return 0;
};

export const day6: Answer = {
  day: 6,
  part1,
  part2,
};
