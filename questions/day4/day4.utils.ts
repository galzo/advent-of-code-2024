import { readMultiLineInput, readSingleLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const readDay4Input = async () => {
  const path = resolveInputPathForDay(4);
  const input = await readMultiLineInput(path, "\n");
  return input;
};

export const countXmasOnInput = (input: string) => {
  return input.match(/XMAS/g)?.length ?? 0;
};

export const reverseInput = (input: string) => {
  return input.split("").reverse().join("");
};

export const resolveColumnFromMatrix = (matrix: string[], col: number) => {
  const column = [];
  for (let row = 0; row < matrix.length; row++) {
    column.push(matrix[row].charAt(col));
  }

  return column.join("");
};

export const resolveRightDiagonalCords = (row: number, col: number, matrix: string[]) => {
  let diagonalRow = row;
  let diagonalCol = col;

  while (diagonalRow > 0 && diagonalCol < matrix[row].length - 1) {
    diagonalRow--;
    diagonalCol++;
  }

  return {
    row: diagonalRow,
    col: diagonalCol,
  };
};

export const resolveLeftDiagonalCords = (row: number, col: number) => {
  let diagonalRow = row;
  let diagonalCol = col;
  while (diagonalRow > 0 && diagonalCol > 0) {
    diagonalRow--;
    diagonalCol--;
  }

  return { row: diagonalRow, col: diagonalCol };
};

export const resolveLeftDiagonalFromMatrix = (matrix: string[], row: number, col: number) => {
  const diagonal = [];
  let diagonalRow = row;
  let diagonalCol = col;

  while (diagonalRow < matrix.length && diagonalCol < matrix[row].length) {
    diagonal.push(matrix[diagonalRow].charAt(diagonalCol));
    diagonalRow++;
    diagonalCol++;
  }

  return diagonal.join("");
};

export const resolveRightDiagonalFromMatrix = (matrix: string[], row: number, col: number) => {
  const diagonal = [];
  let diagonalRow = row;
  let diagonalCol = col;
  while (diagonalRow < matrix.length && diagonalCol > 0) {
    diagonal.push(matrix[diagonalRow].charAt(diagonalCol));
    diagonalRow++;
    diagonalCol--;
  }

  return diagonal.join("");
};
