import { useState } from "react";
import "./App.css";
import MemGame from "./components/MemGame.js";
import Button from "@material-ui/core/Button";

function App() {
  const [reset, setReset] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setReset(true);
            setTimeout(() => {
              setReset(false);
            }, 5);
          }}
        >
          Reset
        </Button>
        <div className="MemGame">
          {!reset ? <MemGame /> : <div>Resetting!</div>}
        </div>
      </header>
    </div>
  );
}

export default App;
