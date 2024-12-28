import type { Answer } from "../../types/global.types";
import {
  countXmasOnLines,
  getMatrixCols,
  getMatrixLeftDiagonals,
  getMatrixRightDiagonals,
  getMatrixRows,
  readDay4Input,
  reverseLines,
} from "./day4.utils";

const part1 = async () => {
  const input = await readDay4Input();

  const rows = getMatrixRows(input);
  const reverseRows = reverseLines(rows);

  const cols = getMatrixCols(input);
  const reverseCols = reverseLines(cols);

  const leftDiagonals = getMatrixLeftDiagonals(input);
  const reverseLeftDiagonals = reverseLines(leftDiagonals);

  const rightDiagonals = getMatrixRightDiagonals(input);
  const reverseRightDiagonals = reverseLines(rightDiagonals);

  const allPossibleLines = [
    ...rows,
    ...reverseRows,
    ...cols,
    ...reverseCols,
    ...leftDiagonals,
    ...reverseLeftDiagonals,
    ...rightDiagonals,
    ...reverseRightDiagonals,
  ];

  return countXmasOnLines(allPossibleLines);
};

const part2 = async () => {
  return 0;
};

export const day4: Answer = {
  day: 4,
  part1,
  part2,
};
