import type { Answer } from "../../types/global.types";
import {
  buildOrderRulesMapping,
  isUpdateValid,
  extractMidPagesOfUpdates,
  readDay5Input,
  sumPages,
  fixInvalidUpdate,
} from "./day5.utils";

export const part1 = async () => {
  const { orderRules, updates } = await readDay5Input();
  const rulesMapping = buildOrderRulesMapping(orderRules);

  const validUpdates = updates.filter((update) => {
    return isUpdateValid(update, rulesMapping);
  });

  const validMidPages = extractMidPagesOfUpdates(validUpdates);
  return sumPages(validMidPages);
};

export const part2 = async () => {
  const { orderRules, updates } = await readDay5Input();
  const rulesMapping = buildOrderRulesMapping(orderRules);

  const invalidUpdates = updates.filter((update) => {
    return !isUpdateValid(update, rulesMapping);
  });

  const fixedUpdates = invalidUpdates.map((update) => {
    return fixInvalidUpdate(update, rulesMapping);
  });

  const fixedMidPages = extractMidPagesOfUpdates(fixedUpdates);
  return sumPages(fixedMidPages);
};

export const day5: Answer = {
  day: 5,
  part1,
  part2,
};
