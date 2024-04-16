import React from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa } from "@fortawesome/fontawesome-free";

function WithoutTokenPage() {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="h-screen w-scren bg-gray-100" {...getRootProps()}>
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faFileArrowUp} />
      <p>Drop the files here ...</p>
    </div>
  );
}

export default WithoutTokenPage;
