import { JSX } from "react/jsx-runtime";
import { IParameters } from "../../App";
import { SortsTypes } from "../Enums/SortTypes";
import Slider from "./Slider";

interface Props {
  parameters: IParameters;
  setParameters: (update: object) => void;
  generateArray: () => void;
}

function Parameters({ parameters, setParameters, generateArray }: Props) {
  const handleChangeVelocity = (newVelocity: number) => {
    setParameters({ velocity: newVelocity });
  };

  const handleChangeSize = (newSize: number) => {
    setParameters({ size: newSize });
  };

  const createDropdownSortTypes = (): JSX.Element[] => {
    return Object.keys(SortsTypes).map((sortType, index) => (
      <option
        key={index}
        value={sortType}
        className="bg-cyan-500 py-2 px-1 font-bold rounded-lg text-black"
      >
        {sortType}
      </option>
    ));
  };

  const handleOnClickRun = () => {
    setParameters({ isSorting: true });
  };

  const handleOnClickStop = () => {
    setParameters({ isSorting: false });
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setParameters({ type: event.target.value });
  };

  const runOrStop = () => {
    if (parameters.isSorting) {
      return (
        <button
          className="bg-cyan-500 text-black font-bold"
          onClick={handleOnClickStop}
        >
          Stop
        </button>
      );
    }
    return (
      <button
        className="bg-cyan-500 text-black font-bold"
        onClick={handleOnClickRun}
      >
        Run
      </button>
    );
  };

  return (
    <div className="flex justify-evenly items-center w-[100%] h-[15%] bg-neutral-900">
      <Slider
        text="Size"
        changeValue={handleChangeSize}
        value={parameters.size}
        min={20}
        max={100}
      ></Slider>

      <Slider
        text="Velocity"
        changeValue={handleChangeVelocity}
        value={parameters.velocity}
        min={10}
        max={100}
      ></Slider>

      <select
        value={parameters.type}
        onChange={handleChangeSelect}
        className="bg-cyan-500 py-2 px-1 font-bold rounded-lg text-black"
      >
        {createDropdownSortTypes()}
      </select>
      <button
        onClick={generateArray}
        className="bg-cyan-500 text-black font-bold"
      >
        Generate
      </button>
      {runOrStop()}
    </div>
  );
}

export default Parameters;
