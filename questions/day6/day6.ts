import type { Answer } from "../../types/global.types";
import { parseMapGuard, parseMapTiles, readDay6Input } from "./day6.utils";
import { TopdownMap } from "./map";

export const part1 = async () => {
  const input = await readDay6Input();
  const tiles = parseMapTiles(input);
  const guard = parseMapGuard(input);
  const map = new TopdownMap(tiles, guard);

  while (map.isGuardOnBoard()) {
    console.clear();
    console.log(map.tiles);
    map.performNextStep();
    await Bun.sleep(100);
  }

  const visitedTileIndices = map.getVisitedTilesIndices();
  console.log(visitedTileIndices);

  return map.countVisitedTiles();
};

export const part2 = async () => {
  return 0;
};

export const day6: Answer = {
  day: 6,
  part1,
  part2,
};
