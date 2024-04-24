import { useEffect, useContext } from "react";
import axios from "axios";
import TableComponent from "../components/TableComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import AppContext from "../contexts/AppContext";

function TablePage() {
  const { token, setDataState } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("/api/status", { headers: { Authorization: `${token}` } })
        .then((res) => {
          setDataState(res.data.tableStatus);
        });
    }, 1000);
    return interval;
  }, [setDataState, token]);

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
