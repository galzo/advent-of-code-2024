import type { Answer } from "../../types/global.types";
import { cleanUnrelevantLetters, readDay4Input } from "./day4.utils";

const part1 = async () => {
  const input = await readDay4Input();
  const cleanedInput = cleanUnrelevantLetters(input);

  return 0;
};

const part2 = async () => {
  return 0;
};

export const day4: Answer = {
  day: 4,
  part1,
  part2,
};
