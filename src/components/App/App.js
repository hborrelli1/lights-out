import React, { useState, useEffect } from 'react';
import './App.css';

import { GameBoard } from '../GameBoard/GameBoard';

function App() {
  const [squares, setSquares] = useState([]);

  const randomizeSquares = () => {
    let gameSquares = new Array(25);
    gameSquares = gameSquares.fill(0);
    let gameSquaresWithValue = gameSquares.map(square => (
      {
        lightsOn: !!Math.floor(Math.random() * 2)
      }
    ))
    console.log(gameSquaresWithValue);

    setSquares(gameSquaresWithValue)
  }

  useEffect(() => {
    randomizeSquares();
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Lights Out</h1>
        <p>Clicking on a cell toggles that cell and each of its immediate neighbors. The goal is to turn out all the lights, ideally with the minimum number of clicks.</p>
      </header>
      <main>
        <section className="game-board">
          <GameBoard squares={squares} />
        </section>
      </main>
    </div>
  );
}

export default App;