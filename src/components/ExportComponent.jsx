import { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../contexts/AppContext";

function ExportComponent() {
  const { token } = useContext(AppContext);
  const [fileType, setFileType] = useState("CSV");

  const handleExport = (e) => {
    axios
      .get("/api/export", {
        headers: { Authorization: `${token}` },
        params: { fileType: fileType },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleSelection = (e) => {
    setFileType(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <select className="text-black outline-none" onChange={handleSelection}>
        <option value="CSV">CSV</option>
        <option value="JSON">JSON</option>
        <option value="XML">XML</option>
        <option value="HTML">HTML</option>
        <option value="TXT">TXT</option>
      </select>
      <div
        className="flex items-center justify-center bg-lime-900 px-3 py-1 cursor-pointer select-none"
        onClick={handleExport}
      >
        Export file
      </div>
    </div>
  );
}

export default ExportComponent;
