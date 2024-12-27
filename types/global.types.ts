export type Answer = {
  /**
   * The day of the question (day1, day2, day3 etc.)
   */
  day: number;
  part1: () => Promise<number>;
  part2: () => Promise<number>;
};
