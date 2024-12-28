import type { Answer } from "../../types/global.types";
import { readDay4Input } from "./day4.utils";
import {
  countXmasInstances,
  countXmasOnLines,
  getMatrixCols,
  getMatrixLeftDiagonals,
  getMatrixRightDiagonals,
  getMatrixRows,
  reverseLines,
} from "./part1.utils";
import { countXMasCrosses, isMasInShapeOfX } from "./part2.utils";

const part1 = async () => {
  const input = await readDay4Input();
  const xmasCount = countXmasInstances(input);
  return xmasCount;
};

const part2 = async () => {
  const input = await readDay4Input();
  const xmasCount = countXMasCrosses(input);
  return xmasCount;
};

export const day4: Answer = {
  day: 4,
  part1,
  part2,
};
