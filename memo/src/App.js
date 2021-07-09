import logo from './logo.svg';
import './App.css';
import MemCard from './components/MemCard.js';
import reactImageLogo from './img/logo-og.png';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <MemCard image={reactImageLogo}></MemCard>
        <MemCard image={reactImageLogo}></MemCard>
        <MemCard image={reactImageLogo}></MemCard>
      </header>
    </div>
  );
}

export default App;
