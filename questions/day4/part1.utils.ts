import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const countXmasInstances = (matrix: string[]) => {
  const rows = getMatrixRows(matrix);
  const reverseRows = reverseLines(rows);
  const xmasCountOnRows = countXmasOnLines([...rows, ...reverseRows]);

  const cols = getMatrixCols(matrix);
  const reverseCols = reverseLines(cols);
  const xmasCountOnCols = countXmasOnLines([...cols, ...reverseCols]);

  const leftDiagonals = getMatrixLeftDiagonals(matrix);
  const reverseLeftDiagonals = reverseLines(leftDiagonals);
  const xmasCountOnLeftDiags = countXmasOnLines([...leftDiagonals, ...reverseLeftDiagonals]);

  const rightDiagonals = getMatrixRightDiagonals(matrix);
  const reverseRightDiagonals = reverseLines(rightDiagonals);
  const xmasCountOnRightDiags = countXmasOnLines([...rightDiagonals, ...reverseRightDiagonals]);

  return xmasCountOnRows + xmasCountOnCols + xmasCountOnLeftDiags + xmasCountOnRightDiags;
};

export const getMatrixRows = (matrix: string[]) => matrix;

export const getMatrixCols = (matrix: string[]) => {
  const cols = [];
  for (let col = 0; col < matrix[0].length; col++) {
    cols.push(__resolveColumn(matrix, col));
  }

  return cols;
};

export const getMatrixRightDiagonals = (matrix: string[]) => {
  const diagonals = [];
  const maxCol = matrix[0].length - 1;

  // Scan all right diagonals on upper half of matrix
  for (let col = 0; col <= maxCol; col++) {
    const diagonal = __resolveRightDiagonal(matrix, 0, col);
    diagonals.push(diagonal);
  }

  // Scan all right diagonals on lower half of matrix
  for (let row = 1; row < matrix.length; row++) {
    const diagonal = __resolveRightDiagonal(matrix, row, 0);
    diagonals.push(diagonal);
  }

  return diagonals;
};

export const getMatrixLeftDiagonals = (matrix: string[]) => {
  const diagonals = [];
  const maxCol = matrix[0].length - 1;

  // Scan all left diagonals on upper half of matrix
  for (let col = 0; col <= maxCol; col++) {
    const diagonal = __resolveLeftDiagonal(matrix, 0, col);
    diagonals.push(diagonal);
  }

  // Scan all left diagonals on lower half of matrix
  for (let row = 1; row < matrix.length; row++) {
    const diagonal = __resolveLeftDiagonal(matrix, row, maxCol);
    diagonals.push(diagonal);
  }

  return diagonals;
};

const __resolveColumn = (matrix: string[], col: number) => {
  const column = [];
  for (let row = 0; row < matrix.length; row++) {
    column.push(matrix[row].charAt(col));
  }

  return column.join("");
};

const __resolveRightDiagonal = (matrix: string[], row: number, col: number) => {
  const diagonal = [];
  let diagonalRow = row;
  let diagonalCol = col;

  while (diagonalRow < matrix.length && diagonalCol < matrix.length) {
    diagonal.push(matrix[diagonalRow].charAt(diagonalCol));
    diagonalRow++;
    diagonalCol++;
  }

  return diagonal.join("");
};

const __resolveLeftDiagonal = (matrix: string[], row: number, col: number) => {
  const diagonal = [];
  let diagonalRow = row;
  let diagonalCol = col;

  while (diagonalRow < matrix.length && diagonalCol >= 0) {
    diagonal.push(matrix[diagonalRow].charAt(diagonalCol));
    diagonalRow++;
    diagonalCol--;
  }
  return diagonal.join("");
};

export const countXmasOnLines = (lines: string[]) => {
  return lines.reduce((res, line) => {
    return (res += __countXmasOnLine(line));
  }, 0);
};

export const reverseLines = (lines: string[]) => {
  return lines.map(__reverseLine);
};

const __countXmasOnLine = (line: string) => {
  return line.match(/XMAS/g)?.length ?? 0;
};

const __reverseLine = (line: string) => {
  return line.split("").reverse().join("");
};
