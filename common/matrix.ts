import util from "util";

export class Matrix<T> {
  private data: T[][];

  constructor(data: T[][]) {
    this.data = data;
  }

  public getCell = (row: number, col: number): T => {
    return this.data[row][col];
  };

  public setCell = (row: number, col: number, value: T) => {
    this.data[row][col] = value;
  };

  public isInMatrixBounds = (row: number, col: number) => {
    if (row < 0 || row >= this.data.length) return false;
    if (col < 0 || col >= this.data[0].length) return false;
    return true;
  };

  /**
   * Override console.log representation, for better readability when printing a matrix
   */
  [util.inspect.custom]() {
    return `rows: ${this.data.length}, cols: ${this.data[0].length}\n\n${this.data
      .map((row) => row.join(" "))
      .join("\n")}`;
  }

  public toString() {
    return this.data.map((row) => row.join(" ")).join("\n");
  }
}

export const buildMatrixFromData = <T>(data: T[][]) => {
  return new Matrix(data);
};

export const buildMatrixFromValue = <T>(rows: number, cols: number, value: T) => {
  const data = Array.from({ length: rows }).map(() => {
    return Array.from({ length: cols }).fill(value);
  });

  return new Matrix(data);
};

export const buildMatrixFromFunction = <T>(
  rows: number,
  cols: number,
  valueFunction: (row: number, col: number) => T
) => {
  const data = Array.from({ length: rows }).map((_, row) => {
    return Array.from({ length: cols }).map((_, col) => valueFunction(row, col));
  });

  return new Matrix(data);
};
