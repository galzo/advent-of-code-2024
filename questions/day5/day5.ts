import type { Answer } from "../../types/global.types";
import {
  buildOrderRulesMapping,
  checkIfUpdateValid,
  extractMidPagesOfUpdates,
  readDay5Input,
  sumPages,
} from "./day5.utils";

export const part1 = async () => {
  const { orderRules, updates } = await readDay5Input();
  const rulesMapping = buildOrderRulesMapping(orderRules);

  const validUpdates = updates.filter((update) => {
    return checkIfUpdateValid(update, rulesMapping);
  });

  const validMidPages = extractMidPagesOfUpdates(validUpdates);
  return sumPages(validMidPages);
};

export const part2 = async () => {
  return 0;
};

export const day5: Answer = {
  day: 5,
  part1,
  part2,
};
