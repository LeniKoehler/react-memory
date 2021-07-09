import './App.css';
import MemCard from './components/MemCard.js';
import reactImageLogo from './img/logo-og.png';

function App() {

  const checkCards = (info) => {
    console.log("A card has been revealed");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardContainer">
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard hasBeenRevealed={(info) => checkCards(info)} image={reactImageLogo}></MemCard></div>
        </div>
      </header>
    </div>
  );
}

export default App;
