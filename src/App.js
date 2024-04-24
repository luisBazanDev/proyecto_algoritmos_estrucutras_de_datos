import { useEffect, useState } from "react";
import AppContext from "./contexts/AppContext";
import WithoutTokenPage from "./pages/WithoutTokenPage";
import TablePage from "./pages/TablePage";

function App() {
  const [dataState, setDataState] = useState("NONE");
  const [data, setData] = useState([]);
  const [page, setPage] = useState({ now: 1, total: 1 });
  const [token, setToken] = useState("");

  useEffect(() => {
    // Fetch data from API
    setData([
      {
        data1: 12,
        data2: 13,
        data3: "Hdasda asd assas das ddasdasdi",
        data4: "Hodasa asd asdsa dsdas dasddadasla",
        data5: "B sdad asd as das asd  asd njour",
        data6: "Cadsaasdasdadasd asd assdiao",
        data7: "Halasdd aasd asd as as daadasdslo",
        data8: "Heasdsd as da sd asda!!!sasdasdj",
        data9: "Heias as as dad as das dasddasd",
        data10: "Hadasd asd asd d asas dasasdasdasej",
      },
      {
        data1: 22,
        data2: 23,
        data3: "Hi",
        data4: "Hola",
        data5: "Bonjour",
        data6: "Ciao",
        data7: "Hallo",
        data8: "Hej",
        data9: "Hei",
        data10: "Hej",
      },
      {
        data1: 32,
        data2: 33,
        data3: "Hi",
        data4: "Hola",
        data5: "Bonjour",
        data6: "Ciao",
        data7: "Hallo",
        data8: "Hej",
        data9: "Hei",
        data10: "Hej",
      },
      {
        data1: 42,
        data2: 43,
        data3: "Hi",
        data4: "Hola",
        data5: "Bonjour",
        data6: "Ciao",
        data7: "Hallo",
        data8: "Hej",
        data9: "Hei",
        data10: "Hej",
      },
      {
        data1: 52,
        data2: 53,
        data3: "Hi",
        data4: "Hola",
        data5: "Bonjour",
        data6: "Ciao",
        data7: "Hallo",
        data8: "Hej",
        data9: "Hei",
        data10: "Hej",
      },
      {
        data1: 62,
        data2: 63,
        data3: "Hi",
        data4: "Hola",
        data5: "Bonjour",
        data6: "Ciao",
        data7: "Hallo",
        data8: "Hej",
        data9: "Hei",
        data10: "Hej",
      },
    ]);

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
  };

  return (
    <AppContext.Provider value={value}>
      <div className="App h-screen">
        {dataState === "NONE" && <WithoutTokenPage />}
        {dataState === "READY" && <TablePage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
