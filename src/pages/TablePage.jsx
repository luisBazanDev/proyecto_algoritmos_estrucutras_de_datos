import React from "react";
import TableComponent from "../components/TableComponent";
import ControlsComponent from "../components/ControlsComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";

function TablePage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>AED - App v1</div>
        <div>controls</div>
        <SortComponent />
        <SearchComponent />
        <ControlsComponent />
      </div>
      <TableComponent />
    </div>
  );
}

export default TablePage;
