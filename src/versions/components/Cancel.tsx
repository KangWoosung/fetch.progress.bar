/*  2024-02-01 00:41:43 


*/

import { useContext } from "react";
import { FetchRateContext } from "../Ver01";

export default function Cancel() {
  const { progressRate, controller, setFetchAborted } =
    useContext(FetchRateContext);

  const abortDownload = () => {
    console.log("AbortController: aborting...");
    controller && controller.abort();
    setFetchAborted(true);
    console.log("signal:", controller?.signal);
  };

  return (
    <>
      <div>Cancel</div>
      <button
        onClick={abortDownload}
        disabled={progressRate > 0 && progressRate < 100 ? false : true}
      >
        Cancel Download
      </button>
    </>
  );
}
