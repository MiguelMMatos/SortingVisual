import { SortsProps } from "./BubbleSort";

const SelectionSort = async ({
  sortingArray,
  setSortingArray,
  setHighlightedIndices,
  velocity,
  isSortingRef,
}: SortsProps) => {
  const arr = [...sortingArray];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      setHighlightedIndices([minIndex, j]);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      await new Promise((resolve) => setTimeout(resolve, velocity));
      if (!isSortingRef.current) return;
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setSortingArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, velocity));
      if (!isSortingRef.current) return;
    }
  }

  setHighlightedIndices([]);
};

export default SelectionSort;
