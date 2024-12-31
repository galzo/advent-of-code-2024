import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";
import { buildMatrixFromData, Matrix } from "../../common/matrix";
import type { Guard } from "./day6.types";
import type { TopdownMap } from "./map";
import { MapTile } from "./mapTile";

export const readDay6Input = async () => {
  return await readMultiLineInput(resolveInputPathForDay(6));
};

export const parseInputTiles = (input: string[]): Matrix<MapTile> => {
  const tiles = input.map(__buildMapTiles);
  return buildMatrixFromData(tiles);
};

export const parseInputGuard = (input: string[]): Guard => {
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[0].length; col++) {
      if (input[row][col] === "^") {
        return {
          row: row,
          col: col,
          direction: "up",
        };
      }
    }
  }

  throw new Error("Guard not found on map");
};

const __buildMapTiles = (line: string): MapTile[] => {
  return line.split("").map((value) => {
    const isBlock = value === "#";
    const isGuard = value === "^";
    return new MapTile(isBlock, isGuard);
  });
};
