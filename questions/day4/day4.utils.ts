import { readMultiLineInput, resolveInputPathForDay } from "../../common/inputReader";

export const readDay4Input = async () => {
  return readMultiLineInput(resolveInputPathForDay(4));
};
