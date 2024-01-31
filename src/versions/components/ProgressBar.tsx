/*  2024-02-01 01:00:10

Shows fetch progress bar

*/

import { useContext } from "react";
import { FetchRateContext } from "../Ver01";

export default function ProgressBar() {
  const { progressRate, fetchCompleted, contentLengthError } =
    useContext(FetchRateContext);
  let displayProgressRate = 0;

  displayProgressRate = progressRate;
  if (fetchCompleted) {
    displayProgressRate = 0;
  }
  return (
    <>
      <div>ProgressBar</div>
      <div>{progressRate}</div>
      <div className="progress-bar-container">
        {fetchCompleted && (
          <div className="progress-bar-completed">Job finished!</div>
        )}
        {!fetchCompleted && (
          <div
            className="progress-bar"
            style={{ width: `${displayProgressRate}%` }}
          ></div>
        )}
        {contentLengthError && (
          <div className="progress-bar-error">
            Error: Server replied without Content-Length header or
            Content-Length is undefined
          </div>
        )}
      </div>
    </>
  );
}
