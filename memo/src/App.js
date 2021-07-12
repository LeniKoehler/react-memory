import { useState } from 'react';
import './App.css';
import MemCard from './components/MemCard.js';
import reactImageLogo from './img/logo-og.png';
import angular from './img/angular.svg';
import Button from '@material-ui/core/Button';

function App() {
  const [refresh, setRefresh] = useState(false)
  const [reset, setReset] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary" onClick={() => {
          setReset(true);
          setTimeout(() => {
            setReset(false);
          }, 5)
        }}>
          Reset
        </Button>
        {!reset ? (<div className="cardContainer">
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 1, pairFound: false, revealed: false, image: reactImageLogo }} ></MemCard></div>
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 2, pairFound: false, revealed: false, image: reactImageLogo }} ></MemCard></div>
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 3, pairFound: false, revealed: false, image: reactImageLogo }} ></MemCard></div>
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 4, pairFound: false, revealed: false, image: reactImageLogo }} ></MemCard></div>
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 5, pairFound: false, revealed: false, image: angular }} ></MemCard></div>
          <div className="card" > <MemCard refresh={refresh} setRefresh={setRefresh} status={{ id: 6, pairFound: false, revealed: false, image: angular }} ></MemCard></div>
        </div>) : <div>There is nothing!</div>}

      </header>
    </div>
  );
}

export default App;
