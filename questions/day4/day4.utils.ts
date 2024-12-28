import { readMultiLineInput, readSingleLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const readDay4Input = async () => {
  const path = resolveInputPathForDay(4);
  const input = await readMultiLineInput(path, "\n");
  return input;
};

export const checkRow = (matrix: string[], row: number) => {
  const currentRow = matrix[row];
  return currentRow.includes("XMAS");
};

export const checkReverseRow = (matrix: string[], row: number) => {
  const currentReversedRow = matrix[row].split("").reverse().join("");
  return currentReversedRow.includes("XMAS");
};

const checkColumn = (matrix: string[][], row: number, col: number) => {};
const checkInverseColumn = (matrix: string[][], row: number, col: number) => {};
const checkDiagonal = (matrix: string[][], row: number, col: number) => {};
const checkReverseDiagonal = (matrix: string[][], row: number, col: number) => {};
