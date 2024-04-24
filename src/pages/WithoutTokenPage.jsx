import { useMemo, useState, useContext } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../contexts/AppContext";

function WithoutTokenPage() {
  const { setToken, setDataState } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data; boundary=" + file.size,
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setToken(response.data);
          setDataState("READY");
        }
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error);
      });
  };

  const onDrop = (acceptedFiles) => {
    if (!acceptedFiles[0]) return;
    setFile(acceptedFiles[0]);

    handleUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...(isDragActive ? { background: "rgba(230,230,255,1)" } : {}),
    }),
    [isDragActive]
  );

  return (
    <div className="h-screen w-screen flex flex-col p-4">
      <div className="text-2xl text-center mb-3">CSV Navigator</div>
      <div
        className={
          "h-full w-full bg-gray-100 flex flex-col justify-center items-center" +
          (file ? " pointer-events-none" : "")
        }
        {...getRootProps({ onDrop, style })}
      >
        <input {...getInputProps()} />
        <FontAwesomeIcon
          icon={file ? faSpinner : faFileArrowUp}
          className={"text-2xl" + (file ? " spin-animation" : "")}
        />
        <p className="text-xl">
          {file ? "Cargando archivo" : "Suelta tu archivo aquí ..."}
        </p>
        <div className={"h-3 w-1/2 bg-gray-500" + (file ? "" : " hidden")}>
          <div className={`h-full bg-blue-400 w-[${progress}%]`}></div>
        </div>
        {/* <div className="App"> */}
        {/* <header> */}
        {/* <h1>Sorter and Searcher v1.0</h1> */}
        {/* </header> */}
        {/* <main> */}
        {/* <UpperBar /> */}
        {/* <Table /> */}
        {/* </main> */}
        {/* <footer></footer> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default WithoutTokenPage;
