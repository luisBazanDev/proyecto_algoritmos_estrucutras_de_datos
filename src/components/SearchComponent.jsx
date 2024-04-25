import { useContext, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../contexts/AppContext";

let search = false;

function Search() {
  const { data, token, dataState } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const [column, setColumn] = useState(0);
  const [algorithm, setAlgorithm] = useState("BINARY");

  if (dataState === "READY" && search) search = false;

  const handlerColumn = (e) => {
    setColumn(e.target.value);
  };

  const handleAlgorithm = (e) => {
    setAlgorithm(e.target.value);
  };

  const handlerQuery = (e) => {
    setQuery(e.target.value);
  };

  const handlerSearch = (e) => {
    if (dataState !== "READY" || query.length <= 0) return;
    axios
      .put("/api/search", null, {
        params: { algorithms: algorithm, col: column, q: query },
        headers: { Authorization: token },
      })
      .then((res) => {
        if (res.status === 200) search = true;
      });
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>Search data</div>
      <input
        type="text"
        name="search"
        className="text-black outline-none p-1"
        onChange={handlerQuery}
      />
      <div className="flex gap-3 text-black">
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
        <select name="search_algorithms" onChange={handleAlgorithm}>
          <option value="BINARY">Binary search</option>
          <option value="EXPONENTIAL">Exponential Search</option>
          <option value="FIBONACCI">Fibonacci Search</option>
          <option value="INTERPOLATION">Interpolation Search</option>
          <option value="JUMP">Jump Search</option>
          <option value="SEQUENTIAL">Sequential Search</option>
        </select>
      </div>
      <div
        className="w-full flex justify-center items-center px-2 py-1 gap-2 bg-pink-400 hover:bg-pink-500 active:bg-pink-600 text-black cursor-pointer select-none font-bold"
        onClick={handlerSearch}
      >
        {search && dataState === "PROCESSING" ? (
          <FontAwesomeIcon icon={faSpinner} className="spin-animation" />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
        <span>
          {search && dataState === "PROCESSING" ? "Searching" : "Search"}
        </span>
      </div>
    </div>
  );
}

export default Search;
