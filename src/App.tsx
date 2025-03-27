import { useEffect, useState } from "react";
import Graph from "./components/Graph/Graph";
import Parameters from "./components/Parameters/Parameters";
import { SortsTypes } from "./components/Enums/SortTypes";

export interface IParameters {
  velocity: number;
  size: number;
  type: SortsTypes;
  isSorting: boolean;
}

function App() {
  const [sortingArray, setSortingArray] = useState<number[]>([]);
  const [parameters, setParameters] = useState({
    velocity: 50,
    size: 100,
    type: SortsTypes.Bubble,
    isSorting: false,
  });

  const updateParameters = (updates: Partial<typeof parameters>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setParameters((prevState: any) => ({
      ...prevState,
      ...updates,
    }));
  };

  useEffect(() => {
    generateArray();
  }, [parameters.size]);

  const generateArray = () => {
    updateParameters({ isSorting: false });
    const newArray = [];
    for (let i = 0; i < parameters.size; i++) {
      newArray.push(randomIntFromInterval(0, 100));
    }

    setSortingArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <Parameters
        parameters={parameters}
        setParameters={updateParameters}
        generateArray={generateArray}
      ></Parameters>
      <Graph
        sortingArray={sortingArray}
        setSortingArray={setSortingArray}
        parameters={parameters}
      ></Graph>
    </div>
  );
}

export default App;
