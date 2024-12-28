import type { Answer } from "../../types/global.types";
import { countXmasOnInput, readDay4Input, reverseInput } from "./day4.utils";
import { MatrixChecker } from "./matrixChecker";

const part1 = async () => {
  const input = await readDay4Input();
  const matrixChecker = new MatrixChecker(input);
  console.log(input);
  let xmasCount = 0;
  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input.length; col++) {
      const currentChar = input[row].charAt(col);
      if (currentChar === "X") {
        xmasCount += matrixChecker.checkXmasAppearances(row, col);
      }
    }
  }

  return xmasCount;
};

const part2 = async () => {
  return 0;
};

export const day4: Answer = {
  day: 4,
  part1,
  part2,
};
