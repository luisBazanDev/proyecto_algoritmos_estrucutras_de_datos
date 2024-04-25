import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSpinner } from "@fortawesome/free-solid-svg-icons";

let sort = false;

function SortComponent() {
  const { data, token, dataState } = useContext(AppContext);
  const [ascendent, setAscendent] = useState(true);
  const [column, setColumn] = useState(0);
  const [algorithm, setAlgorithm] = useState("BUBBLE");

  if (dataState === "READY" && sort) sort = false;

  const handlerColumn = (e) => {
    setColumn(e.target.value);
  };

  const handleOrder = (e) => {
    setAscendent(!ascendent);
  };

  const handleAlgorithm = (e) => {
    setAlgorithm(e.target.value);
  };

  const handlerSort = (e) => {
    axios
      .put("/api/order", null, {
        params: { algorithms: algorithm, col: column, ascendent: ascendent },
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status === 200) sort = true;
      });
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg">Sort data</span>
      <div className="flex flex-col justify-between gap-2 text-black">
        <div className="flex gap-2">
          <select name="column" onChange={handlerColumn}>
            {data !== null
              ? Object.values(data[0]).map((value, index) => {
                  return (
                    <option key={index} value={index}>
                      Column {index}
                    </option>
                  );
                })
              : ""}
          </select>
          <select name="sort_algorithms" onChange={handleAlgorithm}>
            <option value="BUBBLE">Bubble Sort</option>
            <option value="EXCHANGEWITHSIGNAL">EXCHANGEWITHSIGNAL</option>
            <option value="HEAP">Heap Sort</option>
            <option value="INSERTION">Insertion Sort</option>
            <option value="MERGE">Merge Sort</option>
            <option value="QUICK">Quick Sort</option>
            <option value="SELECTION">Selection Sort</option>
            <option value="SHAKER">Shaker sort</option>
            <option value="SHELL">Shell Sort</option>
            <option value="TIM">Tim Sort</option>
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
      <div
        className="w-full flex justify-center items-center px-2 py-1 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-black cursor-pointer select-none font-bold gap-2"
        onClick={handlerSort}
      >
        {sort && dataState === "PROCESSING" ? (
          <FontAwesomeIcon icon={faSpinner} className="spin-animation" />
        ) : (
          <FontAwesomeIcon icon={faSort} />
        )}
        <span>{sort && dataState === "PROCESSING" ? "Sorting" : "Sort"}</span>
      </div>
    </div>
  );
}

export default SortComponent;
