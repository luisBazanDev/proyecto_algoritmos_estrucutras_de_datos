import React from "react";
import ControlsComponent from "./ControlsComponent";

function Search() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>Search data</div>
      <input
        type="text"
        name="search"
        className="text-black outline-none p-1"
      />
      <div className="flex gap-3 text-black">
        <select name="column">
          <option value="">Column 1</option>
          <option value="">Column 2</option>
          <option value="">Column 3</option>
          <option value="">Column 4</option>
        </select>
        <select name="algorithms">
          <option value="">Binary search</option>
          <option value="">Linear search</option>
        </select>
      </div>
      <ControlsComponent search />
    </div>
  );
}

export default Search;
