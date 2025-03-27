import { SortsProps } from "./BubbleSort";

const HeapSort = async ({
  sortingArray,
  setSortingArray,
  setHighlightedIndices,
  velocity,
  isSortingRef,
}: SortsProps) => {
  console.log("HeapSort enter");

  const heapify = async (array: number[], n: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    setHighlightedIndices([i, left < n ? left : -1, right < n ? right : -1]);
    await new Promise((resolve) => setTimeout(resolve, velocity));

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }

    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      setSortingArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, velocity));

      if (!isSortingRef.current) return;

      await heapify(array, n, largest);
    }
  };

  const heapSort = async (array: number[]) => {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      if (!isSortingRef.current) return;
      await heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      setSortingArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, velocity));

      if (!isSortingRef.current) break;

      await heapify(array, i, 0);
    }
  };

  await heapSort([...sortingArray]);
  setHighlightedIndices([]);
};

export default HeapSort;
