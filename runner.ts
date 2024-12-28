import { day1 } from "./questions/day1/day1";
import { day2 } from "./questions/day2/day2";
import { day3 } from "./questions/day3/day3";
import { day4 } from "./questions/day4/day4";
import type { Answer } from "./types/global.types";

const questionMapping: Record<number, Answer> = {
  1: day1,
  2: day2,
  3: day3,
  4: day4,
};

export const run = async (day: number) => {
  const answer = questionMapping[day];
  await __runAnswer(answer);
};

const __runAnswer = async (answer: Answer) => {
  console.log(`=====day${answer.day}=====`);
  await __runAnswerPart(1, answer.part1);
  await __runAnswerPart(2, answer.part2);
  console.log(`=====day${answer.day}=====`);
};

const __runAnswerPart = async (part: 1 | 2, answer: () => Promise<number>) => {
  const timeStart = performance.now();
  const result = await answer();
  const timeEnd = performance.now();
  console.log(`---part${part}---`);
  console.log("result:", result);
  console.log("time took:", `${timeEnd - timeStart} ms`);
};
