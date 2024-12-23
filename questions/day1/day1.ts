import type { Answer } from "../../types/global.types";
import { day1Input } from "./day1.input";
import { areListsValid, buildInstanceMap, readInput } from "./day1.utils";

const part1 = () => {
  const { firstList, secondList } = readInput();

  if (!areListsValid(firstList, secondList)) {
    throw new Error("Invalid lists. input lengths differ");
  }

  return firstList.reduce((res, _, index) => {
    return res + Math.abs(firstList[index] - secondList[index]);
  }, 0);
};

const part2 = () => {
  const { firstList, secondList } = readInput();
  const secondListInstances = buildInstanceMap(secondList);

  return firstList.reduce((res, value) => {}, 0);
};

export const day1: Answer = {
  name: "day1",
  part1,
  part2,
};
