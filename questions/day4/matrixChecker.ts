import {
  countXmasOnInput,
  resolveColumnFromMatrix,
  resolveLeftDiagonalCords,
  resolveLeftDiagonalFromMatrix,
  resolveRightDiagonalCords,
  resolveRightDiagonalFromMatrix,
  reverseInput,
} from "./day4.utils";

export class MatrixChecker {
  matrix: string[];
  checkedRows: Set<number> = new Set();
  checkedCols: Set<number> = new Set();
  checkedLeftDiagonals: Set<{ row: number; col: number }> = new Set();
  checkedRightDiagonals: Set<{ row: number; col: number }> = new Set();

  constructor(matrix: string[]) {
    this.matrix = matrix;
  }

  public checkXmasAppearances = (row: number, col: number) => {
    const rowCount = this.checkRow(row);
    const colCount = this.checkColumn(col);
    const leftDiagCount = this.checkLeftDiagonal(row, col);
    const rightDiagCount = this.checkRightDiagonal(row, col);
    return rowCount + colCount + leftDiagCount + rightDiagCount;
  };

  public checkRow = (row: number) => {
    // Already checked this column, so no need for another check
    if (this.checkedRows.has(row)) return 0;

    const currRow = this.matrix[row];
    const reverseRow = reverseInput(currRow);

    const res = countXmasOnInput(currRow) + countXmasOnInput(reverseRow);
    this.checkedRows.add(row);

    return res;
  };

  public checkColumn = (col: number) => {
    // Already checked this column, so no need for another round
    if (this.checkedCols.has(col)) return 0;

    const currCol = resolveColumnFromMatrix(this.matrix, col);
    const reverseCol = reverseInput(currCol);

    const res = countXmasOnInput(currCol) + countXmasOnInput(reverseCol);
    this.checkedCols.add(col);

    return res;
  };

  public checkLeftDiagonal = (row: number, col: number) => {
    // Resolve the top left coordinates of this diagonal, and test
    // if we already checked it.
    const diagonalCords = resolveLeftDiagonalCords(row, col);
    if (this.checkedLeftDiagonals.has(diagonalCords)) return 0;

    const currDiagonal = resolveLeftDiagonalFromMatrix(this.matrix, diagonalCords.row, diagonalCords.col);
    const reverseDiagonal = reverseInput(currDiagonal);

    const res = countXmasOnInput(currDiagonal) + countXmasOnInput(reverseDiagonal);
    this.checkedLeftDiagonals.add(diagonalCords);

    return res;
  };

  public checkRightDiagonal = (row: number, col: number) => {
    // Resolve the top right coordinates of this diagonal, and test
    // if we already checked it
    const diagonalCords = resolveRightDiagonalCords(row, col, this.matrix);
    if (this.checkedRightDiagonals.has(diagonalCords)) return 0;

    const currDiagonal = resolveRightDiagonalFromMatrix(this.matrix, diagonalCords.row, diagonalCords.col);
    const reverseDiagonal = reverseInput(currDiagonal);

    console.log("diag", currDiagonal);

    const res = countXmasOnInput(currDiagonal) + countXmasOnInput(reverseDiagonal);
    this.checkedLeftDiagonals.add(diagonalCords);

    console.log(res);

    return res;
  };
}
