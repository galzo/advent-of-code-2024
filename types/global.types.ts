export type Question = "day1" | "day2" | "day3";

export type Answer = {
  name: Question;
  part1: () => number;
  part2: () => number;
};
