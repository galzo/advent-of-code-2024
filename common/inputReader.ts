const __readInput = async (path: string) => {
  const file = Bun.file(path);
  return await file.text();
};

export const resolveInputPathForDay = (day: number) => `./questions/day${day}/day${day}.input.txt`;

export const readMultiLineInput = async (path: string, delimeter: string = "\n") => {
  const input = await __readInput(path);
  return input.split(delimeter).filter((line) => line.length > 0);
};

export const readSingleLineInput = async (path: string) => __readInput(path);
