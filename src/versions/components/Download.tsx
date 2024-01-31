/* 2024-01-07 09:52:57

fetch progress state:
-Download: response.body


*/

import { useContext } from "react";
import { FetchRateContext } from "../Ver01";

const Download: React.FC = () => {
  const {
    fetchServer,
    progressRate,
    setProgressRate,
    setFetchCompleted,
    setContentLengthError,
    controller,
  } = useContext(FetchRateContext);
  const chunks: Uint8Array[] = [];
  let receivedLength = 0;

  controller.signal.addEventListener("abort", () => {
    console.log("AbortController: aborted");
  });

  const downloadAction = async () => {
    setFetchCompleted(false);
    setProgressRate(0);
    const response = await fetch(fetchServer, {
      signal: controller.signal,
    });
    console.log(response);
    // const totalLength = response.headers.get("Content-Length");

    const totalLength = parseInt(
      response.headers.get("Content-Length") || "1",
      10
    );
    console.log(totalLength);
    if (totalLength <= 1) setContentLengthError(true);
    else {
      setContentLengthError(false);

      // get stream with getReader()
      // const reader = response.body.getReader();
      // 복사된 ReadableStream을 사용
      const clonedResponse = response.clone();

      // const data = await response.json();
      // console.log(data);

      // return error if response.body is null
      if (clonedResponse.body === null)
        return console.log("response.body is null");
      const reader = clonedResponse.body.getReader();

      while (true as const) {
        const { done, value } = await reader.read();
        if (done) {
          setTimeout(() => {
            setFetchCompleted(true);
          }, 1000);
          break;
        }
        chunks.push(value as Uint8Array);
        receivedLength += value.length;
        const fetchProgressRate =
          (receivedLength / (totalLength as number)) * 100;
        setProgressRate(fetchProgressRate);
        console.log(`${receivedLength}/${totalLength}바이트 다운로드`, value);
      }
    }
  };
  return (
    <>
      <h3>Chunk Download</h3>
      <div>Download</div>
      <button onClick={downloadAction}>Download</button>
      <div>{progressRate}</div>
    </>
  );
};

export default Download;
