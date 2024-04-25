import { useEffect, useState } from "react";
import AppContext from "./contexts/AppContext";
import WithoutTokenPage from "./pages/WithoutTokenPage";
import TablePage from "./pages/TablePage";

function App() {
  const [dataState, setDataState] = useState("NONE");
  const [data, setData] = useState([]);
  const [page, setPage] = useState({ now: 1, total: 1 });
  const [token, setToken] = useState("");
  const [lastSearch, setLastSearch] = useState(-1);

  useEffect(() => {
    // Fetch data from API
    setData(null);

    setDataState("NONE");
  }, []);

  const value = {
    dataState,
    setDataState,
    data,
    setData,
    page,
    setPage,
    token,
    setToken,
    lastSearch,
    setLastSearch,
  };

  return (
    <AppContext.Provider value={value}>
      <div
        className={
          "App h-screen " + (dataState === "PROCESING" ? "cursor-progress" : "")
        }
      >
        {!token && <WithoutTokenPage />}
        {token && <TablePage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
