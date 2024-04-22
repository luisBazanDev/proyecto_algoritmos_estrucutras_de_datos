import { useEffect, useState } from "react";
import AppContext from "./contexts/AppContext";
import WithoutTokenPage from "./pages/WithoutTokenPage";
import TablePage from "./pages/TablePage";

function App() {
  const [dataState, setDataState] = useState({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Fetch data from API
    setData([
      { data1: 12, data2: 13, data3: "Hi" },
      { data1: 22, data2: 23, data3: "Hello" },
      { data1: 32, data2: 33, data3: "Hey" },
      { data1: 42, data2: 43, data3: "Hola" },
      { data1: 52, data2: 53, data3: "Bonjour" },
      { data1: 62, data2: 63, data3: "Ciao" },
    ]);

    setDataState("READY");
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
  };

  return (
    <AppContext.Provider value={value}>
      <div className="App">
        {dataState === "NONE" && <WithoutTokenPage />}
        {dataState === "READY" && <TablePage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
