import "./App.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import TestCompnent from "./TestCompnent";

//test

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function App() {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <div className="App">
        <TestCompnent />
      </div>
    </ThirdwebWeb3Provider>
  );
}

export default App;
