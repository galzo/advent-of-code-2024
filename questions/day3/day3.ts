import type { Answer } from "../../types/global.types";
import { calculateAggregatedOps, extractValidMulOperations, parseMulOperands, readInput } from "./day3.utils";

const part1 = () => {
  const input = readInput();
  const mulOps = extractValidMulOperations(input);
  const parsedOps = mulOps.map(parseMulOperands);
  const result = calculateAggregatedOps(parsedOps);
  return result;
};
const part2 = () => {
  return 0;
};

export const day3: Answer = {
  name: "day3",
  part1,
  part2,
};
