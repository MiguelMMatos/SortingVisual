import { useEffect, useRef, useState } from "react";
import { IParameters } from "../../App";
import BubbleSort from "./Sorts/BubbleSort";
import { SortsTypes } from "../Enums/SortTypes";
import SelectionSort from "./Sorts/SelectionSort";
import InsertionSort from "./Sorts/InsertionSort";
import QuickSort from "./Sorts/QuickSort";
import HeapSort from "./Sorts/HeapSort";

interface Props {
  setSortingArray: (value: number[]) => void;
  sortingArray: number[];
  parameters: IParameters;
}

function Graph({ sortingArray, setSortingArray, parameters }: Props) {
  const [highlightedIndices, setHighlightedIndices] = useState<number[]>([]);
  const isSortingRef = useRef(true);

  const runSort = async () => {
    const parametersToSend = {
      sortingArray,
      setSortingArray,
      setHighlightedIndices,
      velocity: parameters.velocity,
      isSortingRef,
    };

    switch (parameters.type) {
      case SortsTypes.Bubble:
        await BubbleSort(parametersToSend);
        break;
      case SortsTypes.Selection:
        await SelectionSort(parametersToSend);
        break;
      case SortsTypes.Insertion:
        await InsertionSort(parametersToSend);
        break;
      case SortsTypes.Quick:
        await QuickSort(parametersToSend);
        break;
      case SortsTypes.Heap:
        await HeapSort(parametersToSend);
        break;
    }
  };

  useEffect(() => {
    isSortingRef.current = parameters.isSorting;
    setHighlightedIndices([]);
    if (parameters.isSorting) {
      runSort();
    }
  }, [parameters.isSorting]);

  return (
    <div className="w-[60%] h-[100%] flex items-center">
      <div className="flex justify-between items-end w-[90%] h-[80%] border-b border-gray-300">
        {sortingArray.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value}%`,
              width: "10px",
              margin: "0 2px",
              transition: `height ${
                parameters.velocity / 100
              }s ease, background-color`,
              backgroundColor: highlightedIndices.includes(index)
                ? "orange"
                : "lightblue",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Graph;
