import { day1 } from "./questions/day1/day1";
import type { Answer, Question } from "./types/global.types";

const questionMapping: Record<Question, Answer> = {
  day1,
};

export const run = (question: Question) => {
  const answer = questionMapping[question];
  __runAnswer(answer);
};

const __runAnswer = (answer: Answer) => {
  console.log(`=====${answer.name}=====`);
  __runAnswerPart(1, answer.part1);
  __runAnswerPart(2, answer.part2);
  console.log(`=====${answer.name}=====`);
};

const __runAnswerPart = (part: 1 | 2, answer: VoidFunction) => {
  const timeStart = performance.now();
  const result = answer();
  const timeEnd = performance.now();
  console.log(`---part${part}---`);
  console.log("result:", result);
  console.log("time took:", `${timeEnd - timeStart} ms`);
};
