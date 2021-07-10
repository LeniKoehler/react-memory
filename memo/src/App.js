import { useState } from 'react';
import './App.css';
import MemCard from './components/MemCard.js';
import reactImageLogo from './img/logo-og.png';
import angular from './img/angular.svg';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardContainer">
          <div className="card" > <MemCard status={{ pairFound: false }} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={reactImageLogo}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={angular}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={angular}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={angular}></MemCard></div>
          <div className="card" > <MemCard status={{ pairFound: false }} image={angular}></MemCard></div>
        </div>
      </header>
    </div>
  );
}

export default App;
