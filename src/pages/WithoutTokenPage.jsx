import React from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

function WithoutTokenPage() {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="h-screen w-scren bg-gray-100 flex flex-col justify-center items-center" {...getRootProps()}>
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faFileArrowUp} className="text-2xl" />
      <p className="text-xl">Drop the files here ...</p>
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
  );
}

export default WithoutTokenPage;
