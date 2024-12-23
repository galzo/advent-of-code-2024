export type Question = "day1";

export type Answer = {
  name: Question;
  part1: () => number;
  part2: () => number;
};
