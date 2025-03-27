import { RefObject } from "react";

export interface SortsProps {
  sortingArray: number[];
  setSortingArray: (value: number[]) => void;
  setHighlightedIndices: (value: number[]) => void;
  velocity: number;
  isSortingRef: RefObject<boolean>;
}

const BubbleSort = async ({
  sortingArray,
  setSortingArray,
  setHighlightedIndices,
  velocity,
  isSortingRef,
}: SortsProps) => {
  console.log("BubbleSort enter");
  const arr = [...sortingArray];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      setHighlightedIndices([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setSortingArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, velocity));
      }
      if (!isSortingRef.current) break;
    }
    await new Promise((resolve) => setTimeout(resolve, velocity));
    if (!isSortingRef.current) break;
  }
  setHighlightedIndices([]);
};

export default BubbleSort;
