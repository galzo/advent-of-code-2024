import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";
import type { OrderRuleMapping } from "./day5.types";

export const readDay5Input = async () => {
  const input = await readMultiLineInput(resolveInputPathForDay(5));
  const orderRules = __extractPageOrderRules(input);
  const updates = __extractPageUpdates(input);
  return {
    orderRules: __parsePageOrderRules(orderRules),
    updates: __parsePageUpdates(updates),
  };
};

export const isUpdateValid = (update: number[], orderRules: OrderRuleMapping) => {
  for (let i = 0; i < update.length - 1; i++) {
    for (let j = i + 1; j < update.length; j++) {
      const isOrderValid = __checkIfPagesOrderValid(update[i], update[j], orderRules);
      if (!isOrderValid) return false;
    }
  }

  return true;
};

export const fixInvalidUpdate = (update: number[], orderRules: OrderRuleMapping) => {
  const fixedUpdate = [...update];

  for (let i = 0; i < update.length - 1; i++) {
    for (let j = i + 1; j < update.length; j++) {
      // Check if the pages order is invalid, and if so - simply swap them.
      // this will fix the update
      const isOrderValid = __checkIfPagesOrderValid(fixedUpdate[i], fixedUpdate[j], orderRules);
      if (!isOrderValid) {
        [fixedUpdate[i], fixedUpdate[j]] = [fixedUpdate[j], fixedUpdate[i]];
      }
    }
  }

  return fixedUpdate;
};

export const extractMidPagesOfUpdates = (updates: number[][]) => {
  return updates.map((update) => {
    const midIndex = Math.floor(update.length / 2);
    return update[midIndex];
  });
};

export const sumPages = (pages: number[]) => {
  return pages.reduce((res, page) => res + page, 0);
};

const __checkIfPagesOrderValid = (beforePage: number, afterPage: number, orderRules: OrderRuleMapping) => {
  const beforePageRules = orderRules.get(beforePage);
  if (beforePageRules?.has(afterPage)) return true;

  const afterPageRules = orderRules.get(afterPage);
  if (afterPageRules?.has(beforePage)) return false;

  throw new Error("not supposed to happen so i'm here just to be mad if i fucked something up and an error is raised");
};

export const buildOrderRulesMapping = (rules: number[][]) => {
  const mapping: OrderRuleMapping = new Map<number, Set<number>>();

  for (const rule of rules) {
    const ruleMapping = mapping.get(rule[0]) ?? new Set<number>();
    ruleMapping.add(rule[1]);
    mapping.set(rule[0], ruleMapping);
  }

  return mapping;
};

const __parsePageUpdates = (updates: string[]): number[][] => {
  return updates.map((update) => {
    return update.split(",").map((page) => Number(page));
  });
};

const __parsePageOrderRules = (rules: string[]) => {
  return rules.map((rule) => {
    const regex = /(\d+)\|(\d+)/gi;
    const res = regex.exec(rule);
    return [Number(res?.[1]), Number(res?.[2])];
  });
};

const __extractPageOrderRules = (input: string[]) => {
  return input.filter((record) => {
    return /\d+\|\d+/.test(record);
  });
};

const __extractPageUpdates = (input: string[]) => {
  return input.filter((record) => {
    return /(\d+\,)+/.test(record);
  });
};
