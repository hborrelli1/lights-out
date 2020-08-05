import React from 'react';
import './App.css';

import { GameBoard } from '../GameBoard/GameBoard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lights Out</h1>
        <p>Clicking on a cell toggles that cell and each of its immediate neighbors. The goal is to turn out all the lights, ideally with the minimum number of clicks.</p>
      </header>
      <main>
        <section className="game-board">
          <GameBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
