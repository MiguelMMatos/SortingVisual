import { SortsProps } from "./BubbleSort";

const QuickSort = async ({
  sortingArray,
  setSortingArray,
  setHighlightedIndices,
  velocity,
  isSortingRef,
}: SortsProps) => {
  console.log("QuickSort enter");

  const partition = async (
    array: number[],
    low: number,
    high: number
  ): Promise<number> => {
    const pivot = array[high];
    let i = low - 1;

    setHighlightedIndices([high]);
    await new Promise((resolve) => setTimeout(resolve, velocity));

    for (let j = low; j < high; j++) {
      setHighlightedIndices([j, high]);
      await new Promise((resolve) => setTimeout(resolve, velocity));

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        setSortingArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, velocity));
      }

      if (!isSortingRef.current) break;
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    setSortingArray([...array]);
    await new Promise((resolve) => setTimeout(resolve, velocity));

    return i + 1;
  };

  const quickSortRecursive = async (
    array: number[],
    low: number,
    high: number
  ) => {
    if (low < high) {
      const pi = await partition(array, low, high);

      if (!isSortingRef.current) return;

      await quickSortRecursive(array, low, pi - 1);
      await quickSortRecursive(array, pi + 1, high);
    }
  };

  await quickSortRecursive([...sortingArray], 0, sortingArray.length - 1);
  setHighlightedIndices([]);
};

export default QuickSort;
