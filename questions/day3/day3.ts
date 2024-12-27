import type { Answer } from "../../types/global.types";
import { calculateMultsSum, extractValidMulOperations, parseMulOperands, readDay3Input } from "./day3.utils";

const part1 = async () => {
  const input = await readDay3Input();
  const mulOps = extractValidMulOperations(input);
  const parsedOps = mulOps.map(parseMulOperands);
  return calculateMultsSum(parsedOps);
};
const part2 = async () => {
  return 0;
};

export const day3: Answer = {
  day: 3,
  part1,
  part2,
};
