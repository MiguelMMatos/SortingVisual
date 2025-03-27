import { SortsProps } from "./BubbleSort";

const InsertionSort = async ({
  sortingArray,
  setSortingArray,
  setHighlightedIndices,
  velocity,
  isSortingRef,
}: SortsProps) => {
  console.log("InsertionSort enter");
  // eslint-disable-next-line prefer-const
  let arr = [...sortingArray];

  for (let i = 1; i < arr.length; i++) {
    // eslint-disable-next-line prefer-const
    let key = arr[i];
    let j = i - 1;

    setHighlightedIndices([i]);
    await new Promise((resolve) => setTimeout(resolve, velocity));

    while (j >= 0 && arr[j] > key) {
      setHighlightedIndices([j, j + 1]);
      arr[j + 1] = arr[j];
      setSortingArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, velocity));

      j--;

      if (!isSortingRef.current) break;
    }

    arr[j + 1] = key;
    setSortingArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, velocity));

    if (!isSortingRef.current) break;
  }

  setHighlightedIndices([]);
};

export default InsertionSort;
