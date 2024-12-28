import type { Answer } from "../../types/global.types";
import { readDay4Input } from "./day4.utils";
import {
  countXmasOnLines,
  getMatrixCols,
  getMatrixLeftDiagonals,
  getMatrixRightDiagonals,
  getMatrixRows,
  reverseLines,
} from "./part1.utils";

const part1 = async () => {
  const input = await readDay4Input();

  const rows = getMatrixRows(input);
  const reverseRows = reverseLines(rows);
  const xmasCountOnRows = countXmasOnLines([...rows, ...reverseRows]);

  const cols = getMatrixCols(input);
  const reverseCols = reverseLines(cols);
  const xmasCountOnCols = countXmasOnLines([...cols, ...reverseCols]);

  const leftDiagonals = getMatrixLeftDiagonals(input);
  const reverseLeftDiagonals = reverseLines(leftDiagonals);
  const xmasCountOnLeftDiags = countXmasOnLines([...leftDiagonals, ...reverseLeftDiagonals]);

  const rightDiagonals = getMatrixRightDiagonals(input);
  const reverseRightDiagonals = reverseLines(rightDiagonals);
  const xmasCountOnRightDiags = countXmasOnLines([...rightDiagonals, ...reverseRightDiagonals]);

  return xmasCountOnRows + xmasCountOnCols + xmasCountOnLeftDiags + xmasCountOnRightDiags;
};

const part2 = async () => {
  return 0;
};

export const day4: Answer = {
  day: 4,
  part1,
  part2,
};
