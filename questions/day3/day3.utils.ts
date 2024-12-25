import { day3ExampleInput } from "./day3.input";

export const extractValidMulOperations = (input: string): string[] => {
  const regex = /mul\(\d+\,\d+\)/gi;
  const matches = input.match(regex) || [];
  return matches;
};

export const calculateAggregatedOps = (operands: number[][]) => {
  return operands.reduce((res, [op1, op2]) => {
    const mulResult = op1 * op2;
    return (res += mulResult);
  }, 0);
};

export const parseMulOperands = (mulOp: string) => {
  const regex = /mul\((\d+)\,(\d+)\)/gi;
  const res = regex.exec(mulOp);
  return [Number(res?.[1]), Number(res?.[2])];
};

export const readInput = () => {
  return day3ExampleInput;
};
