import { readMultiLineInput, readSingleLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const readDay4Input = async () => {
  const path = resolveInputPathForDay(4);
  const input = await readMultiLineInput(path, "\n");
};

const checkRow = (matrix: string[][], row: number, col: number) => {
  const currentRow = matrix[row];
  if (row + 3 >= currentRow.length) return false;
  return currentRow[row + 1] === "M" && currentRow[row + 2] === "A" && currentRow[row + 3] === "S";
};

const checkReverseRow = (matrix: string[][], row: number, col: number) => {
  const currentRow = matrix[row];
  if (row - 3 < 0) return false;
  return currentRow[row - 1] === "M" && currentRow[row - 2] === "A" && currentRow[row - 3] === "S";
};

const checkColumn = (matrix: string[][], row: number, col: number) => {};
const checkInverseColumn = (matrix: string[][], row: number, col: number) => {};
const checkDiagonal = (matrix: string[][], row: number, col: number) => {};
const checkReverseDiagonal = (matrix: string[][], row: number, col: number) => {};
