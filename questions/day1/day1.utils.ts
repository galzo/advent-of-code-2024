import { day1Input } from "./day1.input";

const __buildInputLists = () => {
  return day1Input.split("\n").reduce(
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

export const readInput = () => {
  const { firstList, secondList } = __buildInputLists();
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
