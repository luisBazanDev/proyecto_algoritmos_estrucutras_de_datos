import { useEffect, useContext } from "react";
import axios from "axios";
import TableComponent from "../components/TableComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import AppContext from "../contexts/AppContext";

var interval;

function TablePage() {
  const { token, setDataState, page, setData } = useContext(AppContext);

  useEffect(() => {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      axios
        .get("/api/status", { headers: { Authorization: `${token}` } })
        .then((res) => {
          setDataState(res.data.tableStatus);
        });
      axios
        .get("/api/data", {
          headers: { Authorization: `${token}` },
          params: { page, limit: 50 },
        })
        .then((res) => {
          setData(res.data);
        });
    }, 1000);
  }, [setDataState, token, setData]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between text-white bg-gray-900">
        <div className="font-bold text-2xl content-center justify-center px-5">
          CSV Navigator
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
