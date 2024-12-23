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

const __readInput = () => {
  const { firstList, secondList } = __buildInputLists();
  return {
    firstList: firstList.sort(),
    secondList: secondList.sort(),
  };
};

const __areListsValid = (first: number[], second: number[]) => {
  return first.length === second.length;
};

export const day1 = () => {
  const { firstList, secondList } = __readInput();

  if (!__areListsValid(firstList, secondList)) {
    throw new Error("Invalid lists. input lengths differ");
  }

  return firstList.reduce((res, _, index) => {
    return res + Math.abs(firstList[index] - secondList[index]);
  }, 0);
};
