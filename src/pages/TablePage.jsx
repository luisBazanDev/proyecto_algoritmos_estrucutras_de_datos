import React from "react";
import Table from "../components/content/Table";
import UpperBar from "../components/algorithms/UpperBar";

function TablePage() {
  return (
    <div className="flex flex-col">
      <div>Controls</div>
      <div className="flex overflow-x-auto">
        {[
          "col1",
          "col2",
          "col3",
          "col4",
          "col5",
          "col6",
          "col7",
          "col8",
          "col9",
        ].map((col, index) => (
          <div className="min-w-48 text-center" key={index}>
            {col}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TablePage;
