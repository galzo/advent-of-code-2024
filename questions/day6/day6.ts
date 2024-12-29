import type { Answer } from "../../types/global.types";
import { parseInputMap, readDay6Input } from "./day6.utils";

export const part1 = async () => {
  const input = await readDay6Input();
  const map = parseInputMap(input);
  console.log(map);

  return 0;
};

export const part2 = async () => {
  return 0;
};

export const day6: Answer = {
  day: 6,
  part1,
  part2,
};
