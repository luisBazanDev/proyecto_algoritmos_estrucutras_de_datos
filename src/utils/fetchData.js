import axios from "axios";

let updateTotal = false;

export const fetchData = async ({
  token,
  dataState,
  pageLocal,
  setData,
  setPage,
}) => {
  if (dataState !== "READY") return;
  axios
    .get("/api/data", {
      headers: { Authorization: `${token}` },
      params: { page: pageLocal.now, limit: 50 },
    })
    .then((res) => {
      setData(res.data.data);
      if (!updateTotal) {
        setPage({ now: pageLocal.now, total: res.data.totalPages });
        updateTotal = true;
      }
    });
};

export const fetchState = async ({
  token,
  setPage,
  setLastSearch,
  setDataState,
  pageLocal,
}) => {
  await axios
    .get("/api/status", { headers: { Authorization: `${token}` } })
    .then((res) => {
      if (res.data.lastSearch !== -1) {
        setLastSearch(res.data.lastSearch);
        setPage({
          now: Math.ceil(res.data.lastSearch / 50),
          total: pageLocal.totalPages,
        });
      }
      setDataState(res.data.tableStatus);
    });
};
