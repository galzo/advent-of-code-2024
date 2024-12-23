import { day1 } from "./questions/day1/day1";
import type { Question } from "./types/global.types";

export const runQuestion = (question: Question) => {
  switch (question) {
    case "day1":
      day1();
  }
};
