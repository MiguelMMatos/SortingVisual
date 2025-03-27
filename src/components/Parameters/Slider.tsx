import React from "react";

interface Props {
  text: string;
  value: number;
  min: number;
  max: number;
  changeValue: (newValue: number) => void;
}

function Slider({ text, min, max, value, changeValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col w-60">
      <h2 className="text-center">{text}</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="accent-cyan-500"
        id="myRange"
      ></input>
    </div>
  );
}

export default Slider;
