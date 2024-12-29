import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";
import { buildMatrixFromData, Matrix } from "../../common/matrix";
import { MapTile } from "./day6.types";

export const readDay6Input = async () => {
  return await readMultiLineInput(resolveInputPathForDay(6));
};

export const parseInputMap = (input: string[]): Matrix<MapTile> => {
  const tiles = input.map(__parseLineTiles);
  return buildMatrixFromData(tiles);
};

const __parseLineTiles = (line: string): MapTile[] => {
  return line.split("").map((value) => {
    const isBlock = value === "#";
    const isGuard = value === "^";
    return new MapTile(isBlock, isGuard);
  });
};
