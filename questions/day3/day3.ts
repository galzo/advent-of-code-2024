import type { Answer } from "../../types/global.types";
import {
  calculateMultsSum,
  extractValidMulOperations,
  parseMulOperands,
  readDay3Input,
  splitUncoditionedPrefix,
  removeDontStatements,
} from "./day3.utils";

const __calculateMultsInput = (input: string) => {
  const mulOps = extractValidMulOperations(input);
  const parsedOps = mulOps.map(parseMulOperands);
  return calculateMultsSum(parsedOps);
};

const part1 = async () => {
  const input = await readDay3Input();
  return __calculateMultsInput(input);
};
const part2 = async () => {
  const input = await readDay3Input();
  console.log(input);
  const [prefix, conditionedOps] = splitUncoditionedPrefix(input);
  const doOpsOnly = removeDontStatements(conditionedOps);
  return __calculateMultsInput(prefix + doOpsOnly);
};

export const day3: Answer = {
  day: 3,
  part1,
  part2,
};
