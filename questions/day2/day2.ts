import type { Answer } from "../../types/global.types";
import { readInput, isReportSafe } from "./day2.utilts";

const part1 = () => {
  const reports = readInput();
  const safeReports = reports.filter((report) => isReportSafe(report, false));
  return safeReports.length;
};
const part2 = () => {
  const reports = readInput();
  const safeReports = reports.filter((report) => isReportSafe(report, true));
  return safeReports.length;
};

export const day2: Answer = {
  name: "day2",
  part1,
  part2,
};
