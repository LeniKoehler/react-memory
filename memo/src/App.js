import { useState } from "react";
import "./App.css";
import MemGame from "./components/MemGame.js";
import Button from "@material-ui/core/Button";
import { resetCards } from "./components/MemCard.js"

function App() {
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  return (
    <div className="App">
      <div className="App-header">
        <div class="headline">
          <div class="title">
            Memory
          </div>
          <div class="score">
            Highscore: {score}s
          </div>
          <div class="score">
            Last score: {lastScore}s
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setReset(true);
              resetCards();
              setTimeout(() => {
                setReset(false);
              }, 5);
            }}
          >
            New Game
          </Button>
        </div>
        <div className="MemGame">
          {!reset ? <MemGame startTime={new Date().getTime()} score={score} setScore={setScore} setLastScore={setLastScore} /> : <div>Resetting!</div>}
        </div>
        <div class="footer">
          made with React <br />
          by <br />
          <a href={"https://github.com/LeniKoehler"} target="_blank">Magdalena Köhler</a><br />
          <a href={"https://github.com/Monogenesis"} target="_blank">Amadeus Zittel</a><br />
        </div>
      </div>
    </div>
  );
}

export default App;
