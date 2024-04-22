import React from "react";
import ControlsComponent from "./ControlsComponent";

function SortComponent() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg">Sort data</span>
      <div className="flex justify-between">
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
        <input type="checkbox" name="order" />
      </div>
      <ControlsComponent sort />
    </div>
  );
}

export default SortComponent;
