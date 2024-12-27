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
  return await readSingleLineInput(path);
};
