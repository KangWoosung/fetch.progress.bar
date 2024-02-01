/*  2024-02-01 00:41:43 


*/

import { useContext } from "react";
import { FetchRateContext } from "../Ver01";

export default function Cancel() {
  const { progressRate, controller, setFetchAborted, xhr } =
    useContext(FetchRateContext);

  const abortFetchProcess = async () => {
    try {
      controller && controller.abort();
      setFetchAborted(true);
      console.log("signal:", controller?.signal);
      xhr.abort();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>Cancel</div>
      <button
        onClick={abortFetchProcess}
        disabled={progressRate > 0 && progressRate < 100 ? false : true}
      >
        Cancel Fetch Action
      </button>
    </>
  );
}
