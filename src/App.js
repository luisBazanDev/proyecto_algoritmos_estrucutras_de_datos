import { useState } from "react";
import AppContext from "./contexts/AppContext";

function App() {
  const [dataState, setDataState] = useState({});
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [token, setToken] = useState("");

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
        <header className="App-header">Hello world!</header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
