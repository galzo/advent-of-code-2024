import type { Answer } from "../../types/global.types";
import { isReportSafe, readInput } from "./day2.utilts";

const part1 = () => {
  const reports = readInput();
  const safeReports = reports.filter(isReportSafe);
  return safeReports.length;
};
const part2 = () => {
  return 0;
};

export const day2: Answer = {
  name: "day2",
  part1,
  part2,
};
