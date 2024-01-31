/*  2024-02-01 00:41:43 


*/

import { useContext } from "react";
import { FetchRateContext } from "../Ver01";

export default function Cancel() {
  const { controller } = useContext(FetchRateContext);

  const abortDownload = () => {
    console.log("AbortController: aborting...");
    controller.abort();
  };

  return (
    <>
      <div>Cancel</div>
      <button onClick={abortDownload}>Cancel Download</button>
    </>
  );
}
