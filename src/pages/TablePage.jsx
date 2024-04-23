import React from "react";
import TableComponent from "../components/TableComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";

function TablePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between text-white bg-gray-900">
        <div className="font-bold text-2xl content-center justify-center px-5">
          AED - App v1
        </div>
        <div>controls</div>
        <SortComponent />
        <SearchComponent />
      </div>
      <TableComponent />
    </div>
  );
}

export default TablePage;
