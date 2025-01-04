import {
  readMultiLineInput,
  resolveInputPathForDay,
} from "../../common/inputReader";
import { buildMatrixFromData, Matrix } from "../../common/matrix";
import type { Guard, MapTileType, TileCoordinates } from "./day6.types";
import type { TopdownMap } from "./map";
import { MapTile } from "./mapTile";

export const readDay6Input = async () => {
  return await readMultiLineInput(resolveInputPathForDay(6));
};

export const buildMatrixFromInput = (input: string[]): Matrix<MapTile> => {
  const tiles = input.map(__buildMapTiles);
  return buildMatrixFromData(tiles);
};

export const buildGuardFromInput = (input: string[]): Guard => {
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
    const type = __resolveTileType(value);
    return new MapTile(type);
  });
};

const __resolveTileType = (value: string): MapTileType => {
  switch (value) {
    case "#":
      return "block";
    case "^":
      return "guard";
    case "O":
      return "userBlock";
    case ".":
    default:
      return "tile";
  }
};
