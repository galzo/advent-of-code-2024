export const countXMasCrosses = (matrix: string[]) => {
  let xMasCount = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const isAChar = matrix[row].charAt(col) === "A";
      if (!isAChar) continue;

      // In case we found an "A" character, let's check if it's the middle
      // of an X made from the letters "M A S"
      const isXmasCross = isMasInShapeOfX(matrix, row, col);
      if (isXmasCross) xMasCount++;
    }
  }
  return xMasCount;
};

export const isMasInShapeOfX = (matrix: string[], row: number, col: number) => {
  const leftCross = resolveLeftCross(matrix, row, col);
  const rightCross = resolveRightCross(matrix, row, col);
  if (!leftCross || !rightCross) return false;

  return crossContainsMas(leftCross) && crossContainsMas(rightCross);
};

export const resolveLeftCross = (matrix: string[], row: number, col: number) => {
  if (!_isCrossInMatrixBounds(matrix, row, col)) return null;

  const topLeft = matrix[row - 1].charAt(col - 1);
  const center = matrix[row].charAt(col);
  const bottomRight = matrix[row + 1].charAt(col + 1);

  return [topLeft, center, bottomRight].join("");
};

export const resolveRightCross = (matrix: string[], row: number, col: number) => {
  if (!_isCrossInMatrixBounds(matrix, row, col)) return null;

  const topRight = matrix[row - 1].charAt(col + 1);
  const center = matrix[row].charAt(col);
  const bottomLeft = matrix[row + 1].charAt(col - 1);

  return [topRight, center, bottomLeft].join("");
};

export const crossContainsMas = (cross: string) => {
  // if cross contains "MAS", then we're done
  if (__hasMasOnInput(cross)) return true;

  // Otherwise - check its inversion for "MAS"
  const reverseCross = __reverseInput(cross);
  return __hasMasOnInput(reverseCross);
};

const _isCrossInMatrixBounds = (matrix: string[], row: number, col: number) => {
  const isRowInBounds = row > 0 && row < matrix.length - 1;
  const isColInBounds = col > 0 && col < matrix[0].length - 1;
  return isRowInBounds && isColInBounds;
};

const __hasMasOnInput = (input: string) => {
  return /MAS/g.test(input);
};

const __reverseInput = (input: string) => {
  return input.split("").reverse().join("");
};
