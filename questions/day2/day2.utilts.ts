import { day2Input } from "./day2.input";
import type { LevelStep } from "./day2.types";

export const __buildInputLists = () => {
  return day2Input.split("\n").reduce((res, report) => {
    const levels = report.split(/\s+/).map((level) => Number(level));
    return [...res, levels];
  }, [] as number[][]);
};

const __buildReportLevelSteps = (report: number[]): LevelStep[] => {
  const steps = [];
  for (let i = 0; i < report.length - 1; i++) {
    const currentLevel = report[i];
    const nextLevel = report[i + 1];
    steps.push({
      level: currentLevel,
      index: i,
      diff: nextLevel - currentLevel,
    });
  }

  return steps;
};

const __removeLevelFromReport = (report: number[], index: number) => {
  return [...report.slice(0, index), ...report.slice(index + 1)];
};

const __resolveUnsafeSteps = (steps: LevelStep[]) => {
  // Make sure that all steps are non-zero, and positive/negative
  // according to the first step. a report is considered safe if that's the case
  const isReportIncreasing = steps[0].diff > 0;
  const unsafeSteps = steps.filter((step) => {
    const isSameDirection = isReportIncreasing ? step.diff > 0 : step.diff < 0;
    const isInValidRange = Math.abs(step.diff) <= 3;
    return !isSameDirection || !isInValidRange;
  });

  return unsafeSteps;
};

export const isReportSafe = (report: number[], enableProblemDampner = false): boolean => {
  const steps = __buildReportLevelSteps(report);
  const unsafeSteps = __resolveUnsafeSteps(steps);
  if (unsafeSteps.length <= 0) return true;

  if (!enableProblemDampner) {
    return false;
  }

  const hasTrimmedSafeVersion = unsafeSteps.some((invalidStep) => {
    const invalidIndices = [invalidStep.index, invalidStep.index + 1];
    for (const invalidIndex of invalidIndices) {
      const trimmedReport = __removeLevelFromReport(report, invalidIndex);
      const isTrimmedReportSafe = isReportSafe(trimmedReport);
      if (isTrimmedReportSafe) return true;
    }
  });

  return hasTrimmedSafeVersion;
};

export const readInput = () => {
  return __buildInputLists();
};
