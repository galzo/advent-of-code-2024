import { day2Input } from "./day2.input";

export const __buildInputLists = () => {
  return day2Input.split("\n").reduce((res, report) => {
    const levels = report.split(/\s+/).map((level) => Number(level));
    return [...res, levels];
  }, [] as number[][]);
};

const __buildReportLevelSteps = (report: number[]) => {
  const steps = [];
  for (let i = 0; i < report.length - 1; i++) {
    const currentLevel = report[i];
    const nextLevel = report[i + 1];
    steps.push(nextLevel - currentLevel);
  }

  return steps;
};

export const isReportSafe = (report: number[]) => {
  const reportSteps = __buildReportLevelSteps(report);

  // Edge case, we want to make sure we have no zero step on the first element
  // Since we estimate whether the report safe/unsafe according to that element
  if (reportSteps[0] === 0) return false;

  // Make sure that all steps are non-zero, and positive/negative
  // according to the first step. a report is considered safe if that's the case
  const isReportIncreasing = reportSteps[0] > 0;
  const areAllStepsValid = reportSteps.every((step) => {
    const isSameDirection = isReportIncreasing ? step > 0 : step < 0;
    const isInValidRange = Math.abs(step) <= 3;
    return isSameDirection && isInValidRange;
  });

  return areAllStepsValid;
};

export const readInput = () => {
  return __buildInputLists();
};
