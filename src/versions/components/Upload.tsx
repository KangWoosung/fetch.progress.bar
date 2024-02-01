/*  2024-02-01 19:12:42

Why using XMLHttpRequest?
 = fetch does not support upload bytes status

2024-02-01 21:11:34
This component makes too many renders of whole page.
Leave it for future refactoring.

*/

import React, { RefObject, useContext, useRef } from "react";
import { FetchRateContext } from "../Ver01";

const Upload = () => {
  const uploadFileRef: RefObject<HTMLInputElement> = useRef(null);
  const {
    fetchServer,
    setProgressRate,
    setFetchAborted,
    setFetchCompleted,
    xhr,
  } = useContext(FetchRateContext);
  let fileToUpload: File | null = null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files === undefined) return false;
    else if (e.target.files?.length === 0) return false;
    else if (e.target.files) fileToUpload = e.target.files[0];
  };

  const uploadFileAction = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("form submitted");
    event.preventDefault();
    setFetchCompleted(false);
    setFetchAborted(false);
    setProgressRate(0);
    const formData = new FormData();
    // const uploadFile = document.querySelector('input[type=file]')?.files[0];
    // const uploadFile = uploadFileRef.current
    if (fileToUpload === null) return false;
    formData.append("file", fileToUpload);

    let xhrProgress = 0;
    const handleProgress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        xhrProgress = Math.floor((event.loaded * 100) / event.total);
        setProgressRate(xhrProgress);
        console.log(xhrProgress);
      }
    };
    xhr.upload.addEventListener("progress", handleProgress);
    xhr.upload.addEventListener("abort", () => {
      setFetchCompleted(false);
    });
    xhr.upload.addEventListener("loadend", () => {
      if (xhrProgress === 100) {
        // setProgressRate(100);
        setFetchCompleted(true);
      }
    });
    xhr.open("POST", fetchServer[0]);
    xhr.send(formData);
  };
  return (
    <>
      <div>Upload</div>
      <form onSubmit={uploadFileAction}>
        <input type="file" ref={uploadFileRef} onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
