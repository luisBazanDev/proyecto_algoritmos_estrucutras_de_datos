import { useEffect, useContext } from "react";
import axios from "axios";
import TableComponent from "../components/TableComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import AppContext from "../contexts/AppContext";

var interval;
var pageLocal;
var localTableState;

function TablePage() {
  const { token, dataState, setDataState, page, setData, setPage } =
    useContext(AppContext);

  pageLocal = page;
  localTableState = dataState;

  useEffect(() => {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      axios
        .get("/api/status", { headers: { Authorization: `${token}` } })
        .then((res) => {
          setDataState(res.data.tableStatus);
        });
      if (localTableState !== "READY") return;
      axios
        .get("/api/data", {
          headers: { Authorization: `${token}` },
          params: { page: pageLocal.now, limit: 50 },
        })
        .then((res) => {
          setData(res.data.data);
          setPage({ now: pageLocal.now, total: res.data.totalPages });
        });
    }, 1000);
  }, [setDataState, token, setData, setPage]);

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
