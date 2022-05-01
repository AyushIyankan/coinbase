import React from "react";

import { useWeb3 } from "@3rdweb/hooks";
import styledComponents from "styled-components";

function TestCompnent() {
  const { address, connectWallet } = useWeb3;
  return (
    <div>
      <button onClick={() => connectWallet("injected")}>Connect Wallet</button>
    </div>
  );
}

export default TestCompnent;
