/*  2024-02-01 06:51:35


*/

import { useContext, useEffect } from "react";
import { FetchRateContext } from "../Ver01";
import { fetchServers } from "../Ver01";

const SwitchServer = () => {
  const { fetchServer, setFetchServer } = useContext(FetchRateContext);

  useEffect(() => {
    setFetchServer(fetchServers[0]);
  }, []);

  const switchFetchServer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return console.log("e.target is null");
    console.log(e.target.value);
    setFetchServer(e.target.value);
  };
  return (
    <>
      <h3>SwitchServer</h3>
      <form className="switch-server-form">
        {fetchServers.map((server, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="server"
                  value={server}
                  checked={fetchServer === server}
                  onChange={switchFetchServer}
                />
                {server}
              </label>
              <br />
            </div>
          );
        })}
      </form>
    </>
  );
};

export default SwitchServer;
