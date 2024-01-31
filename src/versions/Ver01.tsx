/*  2024-02-01 01:10:15

fetch progress state:
-Download: response.body
-Cancel download: AbortController.signal 
-Upload: xhr

*/

import Cancel from "./components/Cancel";
import Download from "./components/Download";
import Upload from "./components/Upload";
import ProgressBar from "./components/ProgressBar";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import SwitchServer from "./components/SwitchServer";

export const fetchServers = [
  "http://localhost:3000/chunk",
  "https://jsonplaceholder.typicode.com/todos",
];

type ContextProps = {
  fetchServer: string;
  setFetchServer: Dispatch<SetStateAction<string>>;
  progressRate: number;
  setProgressRate: Dispatch<SetStateAction<number>>;
  fetchCompleted: boolean;
  setFetchCompleted: Dispatch<SetStateAction<boolean>>;
  contentLengthError: boolean;
  setContentLengthError: Dispatch<SetStateAction<boolean>>;
  controller: AbortController;
};

export const FetchRateContext = createContext<ContextProps>({
  fetchServer: "http://localhost:3000/chunk",
  setFetchServer: () => {},
  progressRate: 0,
  setProgressRate: () => {},
  fetchCompleted: false,
  setFetchCompleted: () => {},
  contentLengthError: false,
  setContentLengthError: () => {},
  controller: new AbortController(),
});

const Ver01 = () => {
  const controller = new AbortController();
  const [fetchServer, setFetchServer] = useState("");
  const [progressRate, setProgressRate] = useState(0);
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [contentLengthError, setContentLengthError] = useState(false);

  controller.signal.addEventListener("abort", () => {
    console.log("AbortController: aborted");
  });

  return (
    <>
      <h1>Fetch Progress bar</h1>
      <h3>Ver01</h3>
      <pre>
        Calculates fetch progress percentage based on Content-Length header info
        from fetching server.
      </pre>
      <FetchRateContext.Provider
        value={{
          fetchServer,
          setFetchServer,
          progressRate,
          setProgressRate,
          fetchCompleted,
          setFetchCompleted,
          contentLengthError,
          setContentLengthError,
          controller,
        }}
      >
        <SwitchServer />
        <Download />
        <Cancel />
        <Upload />
        <ProgressBar />
      </FetchRateContext.Provider>
    </>
  );
};

export default Ver01;
