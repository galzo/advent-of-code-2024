import { readMultiLineInput, readSingleLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const readDay4Input = async () => {
  const path = resolveInputPathForDay(4);
  const input = await readMultiLineInput(path, "\n");
  console.log(input.join("\n"));

  const firstLine = input[1];
  for (let i = 0; i < firstLine.length; i++) {
    const letter = firstLine.charAt(i);
    if (letter !== "X") continue;
    const isXmas = checkInverseLine(firstLine, i);
    console.log(isXmas);
  }

  return input;
};

const checkLine = (input: string, index: number) => {
  if (index + 3 >= input.length) return false;
  return input[index + 1] === "M" && input[index + 2] === "A" && input[index + 3] === "S";
};

const checkInverseLine = (input: string, index: number) => {
  if (index - 3 < 0) return false;
  return input[index - 1] === "M" && input[index - 2] === "A" && input[index - 3] === "S";
};

/**
 * We want to look for XMAS, so we can remove any other letter from the input
 */
export const cleanUnrelevantLetters = (input: string) => {
  console.log("input:", input);
};
