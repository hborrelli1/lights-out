import React, { useState, useEffect } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import { GameBoard } from '../GameBoard/GameBoard';

function App() {
  const [squares, setSquares] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  const randomizeSquares = () => {
    let gameSquares = new Array(25);
    gameSquares = gameSquares.fill(0);
    let gameSquaresWithValue = gameSquares.map(square => (
      {
        id: uuidv4(),
        lightsOn: !!Math.floor(Math.random() * 2)
      }
    ))
    console.log(gameSquaresWithValue);

    setSquares(gameSquaresWithValue)
  }

  const toggleSquares = (id) => {
    // capture current square (id? index?)
    // calculate adjacent squares
      // add 1 & 5
      // Subtract 1 & 5
      // If adjacent square index is < 0 or > 24 ignore.
      // create array of values to toggle
      // pass array into function that toggles square
      // toggle all adjacent squares
      // update state.
    setMoveCount(moveCount + 1);
    let squaresData = [...squares];
    let indexOfClickedSquare = squaresData.findIndex(square => square.id === id);

    const calculateAdjacentSquares = (i) => {
      let squaresToToggle = [i];
      let firstColumnValues = [0, 5, 10, 15, 20];
      let fifthColumnValues = [4, 9, 14, 19 ,24];

      if (firstColumnValues.includes(i)) {
        squaresToToggle.push(i + 1, i + 5, i - 5);
      } else if (fifthColumnValues.includes(i)) {
        squaresToToggle.push(i + 5, i - 1, i - 5);
      } else {
        squaresToToggle.push(i - 1, i + 1, i + 5, i - 5);
      }
      
      let adjacentSquaresClean = squaresToToggle.filter(index => index >= 0 && index <= 24)
      return adjacentSquaresClean;
    }

    const toggleSquareValues = (squaresToToggle) => {
      squaresToToggle.forEach(index => {
        squaresData[index].lightsOn = !squaresData[index].lightsOn;
      })
    }

    let adjacentSquares = calculateAdjacentSquares(indexOfClickedSquare);
    toggleSquareValues(adjacentSquares);
    setSquares(squaresData);
  }

  const resetGame = () => {
    randomizeSquares();
    setMoveCount(0);
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
        <GameBoard squares={squares} toggleSquares={toggleSquares} />
        <section className="game-meta">
          <p>Number of moves: {moveCount}</p>
          <button onClick={resetGame}>Reset Game</button>
        </section>
      </main>
    </div>
  );
}

export default App;
