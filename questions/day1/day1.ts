import type { Answer } from "../../types/global.types";
import { areListsValid, buildInstanceMap, readDay1Input } from "./day1.utils";

const part1 = async () => {
  const { firstList, secondList } = await readDay1Input();

  if (!areListsValid(firstList, secondList)) {
    throw new Error("Invalid lists. input lengths differ");
  }

  return firstList.reduce((res, _, index) => {
    return res + Math.abs(firstList[index] - secondList[index]);
  }, 0);
};

const part2 = async () => {
  const { firstList, secondList } = await readDay1Input();
  const secondListInstances = buildInstanceMap(secondList);

  return firstList.reduce((res, number) => {
    const instancesOfNumber = secondListInstances.get(number) ?? 0;
    const value = number * instancesOfNumber;
    return res + value;
  }, 0);
};

export const day1: Answer = {
  day: 1,
  part1,
  part2,
};
