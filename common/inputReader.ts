const __readInput = async (path: string) => {
  const file = Bun.file(path);
  return await file.text();
};

export const readMultiLineInput = async (path: string, delimeter: string = "\n") => {
  const input = await __readInput(path);
  return input.split(delimeter);
};

export const readSingleLineInput = async (path: string) => __readInput(path);
