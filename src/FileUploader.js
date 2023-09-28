// src/FileUploader.js

import React, { useState } from "react";

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const fileChangedHandler = (event) => {
    setSelectedFiles(event.target.files);
  };

  const uploadHandler = async () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("images", selectedFiles[i]);
    }

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Uploaded file URLs:", data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={fileChangedHandler} />
      <button onClick={uploadHandler}>Upload</button>
    </div>
  );
};

export default FileUploader;
