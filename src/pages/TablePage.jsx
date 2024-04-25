import { useEffect, useContext } from "react";
import TableComponent from "../components/TableComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import ExportComponent from "../components/ExportComponent";
import AppContext from "../contexts/AppContext";
import { fetchData, fetchState } from "../utils/fetchData";

var interval;
var pageLocal;
var localTableState;

function TablePage() {
  const {
    token,
    dataState,
    setDataState,
    page,
    setData,
    setPage,
    setLastSearch,
  } = useContext(AppContext);

  pageLocal = page;
  localTableState = dataState;

  useEffect(() => {
    if (interval) clearInterval(interval);

    interval = setInterval(async () => {
      await fetchState({
        pageLocal,
        setDataState,
        setLastSearch,
        setPage,
        token,
      });
      await fetchData({
        token,
        setData,
        setDataState,
        setPage,
        setLastSearch,
        dataState: localTableState,
        pageLocal,
      });
    }, 1000);
  }, [setDataState, token, setData, setPage, setLastSearch]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between text-white bg-gray-900">
        <div className="font-bold text-2xl content-center justify-center px-5">
          CSV Navigator
        </div>
        <ExportComponent />
        <SortComponent />
        <SearchComponent />
      </div>
      <TableComponent />
    </div>
  );
}

export default TablePage;
