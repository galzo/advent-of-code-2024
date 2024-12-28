import { readMultiLineInput, readSingleLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const extractValidMulOperations = (input: string): string[] => {
  const regex = /mul\(\d+\,\d+\)/gi;
  const matches = input.match(regex) || [];
  return matches;
};

export const calculateMultsSum = (mulOps: number[][]) => {
  return mulOps.reduce((res, [operand1, operand2]) => {
    const mulResult = operand1 * operand2;
    return (res += mulResult);
  }, 0);
};

export const parseMulOperands = (mulOp: string) => {
  const regex = /mul\((\d+)\,(\d+)\)/gi;
  const res = regex.exec(mulOp);
  return [Number(res?.[1]), Number(res?.[2])];
};

export const readDay3Input = async () => {
  const path = resolveInputPathForDay(3);
  const input = await readSingleLineInput(path);
  return input.replace("\n", "").replace(/\s+/gi, "");
};

/**
 * Splits the input into two inputs: a prefix where no conditional (DO or DONT) statements
 * are present, and the rest of the input, starting from the first conditional statement
 */
export const splitUncoditionedPrefix = (input: string): string[] => {
  const res = /(do|don\'t)\(\)/i.exec(input);
  return res?.index ? [input.slice(0, res?.index), input.slice(res?.index, input.length)] : ["", input];
};

export const removeDontStatements = (input: string): string => {
  // Remove any don't() sections that end with do(), replace them with empty string
  const dontSectionRegex = /don\'t\(\).*?do\(\)/gim;
  const cleanedInput = input.replace(dontSectionRegex, "");

  // Make sure that we don't have any don't() section that goes all the way to the end of the string
  // we'll want to remove this as well, to avoid any corner cases of a "don't" that never ends
  const dontSuffixRegex = /don\'t\(\).*/gi;
  return cleanedInput.replace(dontSuffixRegex, "");
};
