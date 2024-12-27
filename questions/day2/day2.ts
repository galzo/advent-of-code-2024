import type { Answer } from "../../types/global.types";
import { readDay2Input, isReportSafe } from "./day2.utilts";

const __runDay2 = async (enableProblemDampner: boolean) => {
  const reports = await readDay2Input();
  const safeReports = reports.filter((report) => isReportSafe(report, enableProblemDampner));
  return safeReports.length;
};

const part1 = async () => __runDay2(false);
const part2 = async () => __runDay2(true);

export const day2: Answer = {
  day: 2,
  part1,
  part2,
};
