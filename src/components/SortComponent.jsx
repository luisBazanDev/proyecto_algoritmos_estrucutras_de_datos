import { useState } from "react";
import ControlsComponent from "./ControlsComponent";

function SortComponent() {
  const [ascendent, setAscendent] = useState(true);

  const handleOrder = (e) => {
    setAscendent(!ascendent);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg">Sort data</span>
      <div className="flex flex-col justify-between gap-2 text-black">
        <div className="flex gap-2">
          <select name="column">
            <option value="">Column 1</option>
            <option value="">Column 2</option>
            <option value="">Column 3</option>
            <option value="">Column 4</option>
          </select>
          <select name="sort_algorithms">
            <option value="">Sort by bubble</option>
            <option value="">Sort by quick</option>
            <option value="">Sort by merge</option>
            <option value="">Sort by heap</option>
          </select>
        </div>
        <div
          className="flex justify-center gap-2 text-white w-full cursor-pointer select-none"
          onClick={handleOrder}
        >
          <input type="checkbox" name="order" checked={ascendent} />
          <span>{ascendent ? "Ascendent" : "Descendent"}</span>
        </div>
      </div>
      <ControlsComponent sort />
    </div>
  );
}

export default SortComponent;
