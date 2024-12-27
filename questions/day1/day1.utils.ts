import { readMultiLineInput } from "./../../common/inputReader";

const __buildInputLists = (input: string[]) => {
  return input.reduce(
    (res, line) => {
      const [firstItem, secondItem] = line.split(/\s+/);
      return {
        firstList: [...res.firstList, Number(firstItem)],
        secondList: [...res.secondList, Number(secondItem)],
      };
    },
    {
      firstList: [] as number[],
      secondList: [] as number[],
    }
  );
};

export const areListsValid = (first: number[], second: number[]) => {
  return first.length === second.length;
};

export const readDay1Input = async () => {
  const input = await readMultiLineInput("./questions/day1/day1.input.txt");
  const { firstList, secondList } = __buildInputLists(input);
  return {
    firstList: firstList.sort(),
    secondList: secondList.sort(),
  };
};

export const buildInstanceMap = (input: number[]) => {
  const output = new Map<number, number>();

  for (const number of input) {
    const existingInstances = output.get(number) ?? 0;
    output.set(number, existingInstances + 1);
  }

  return output;
};
