import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";
import { buildMatrixFromData, Matrix } from "../../common/matrix";
import type { Guard } from "./day6.types";
import { MapTile } from "./mapTile";

export const readDay6Input = async () => {
  return await readMultiLineInput(resolveInputPathForDay(6));
};

export const parseMapTiles = (input: string[]): Matrix<MapTile> => {
  const tiles = input.map(__parseTiles);
  return buildMatrixFromData(tiles);
};

export const parseMapGuard = (input: string[]): Guard => {
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

const __parseTiles = (line: string): MapTile[] => {
  return line.split("").map((value) => {
    const isBlock = value === "#";
    const isGuard = value === "^";
    return new MapTile(isBlock, isGuard);
  });
};

export const resolveNextGuardCol = (guard: Guard) => {
  switch (guard.direction) {
    case "down":
    case "up":
      return guard.col;
    case "left":
      return guard.col - 1;
    case "right":
    default:
      return guard.col + 1;
  }
};

export const resolveNextGuardRow = (guard: Guard) => {
  switch (guard.direction) {
    case "right":
    case "left":
      return guard.row;
    case "down":
      return guard.row + 1;
    case "up":
    default:
      return guard.row - 1;
  }
};

export const resolveGuardRotateDirection = (guard: Guard) => {
  switch (guard.direction) {
    case "up":
      return "right";
    case "right":
      return "down";
    case "down":
      return "left";
    case "left":
    default:
      return "up";
  }
};

export const resolveTileVisitDirection = (tile: MapTile, guard: Guard) => {
  if (tile.isVisited && tile.guardVisitDirection !== guard.direction) {
    return "cross";
  }

  return guard.direction;
};
