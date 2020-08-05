import React, { useState, useEffect } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import { GameBoard } from '../GameBoard/GameBoard';
import { VictoryCard } from '../VictoryCard/VictoryCard';

function App() {
  const [squares, setSquares] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [gameWon , setGameWon] = useState(true);

  const randomizeSquares = () => {
    let gameSquares = new Array(25);
    gameSquares = gameSquares.fill(0);
    let gameSquaresWithValue = gameSquares.map(square => (
      {
        id: uuidv4(),
        lightsOn: !!Math.floor(Math.random() * 2)
      }
    ))

    setSquares(gameSquaresWithValue)
  }

  const toggleSquares = (id) => {
    setMoveCount(moveCount + 1);
    let squaresData = [...squares];
    let indexOfClickedSquare = squaresData.findIndex(square => square.id === id);

    // i represents the index of clicked square
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
    determineVictory()
  }

  const resetGame = () => {
    setGameWon(false)
    randomizeSquares();
    setMoveCount(0);
  }

  const determineVictory = () => {
    let winningLogic = (square) => square.lightsOn === false;
    let gameWon = squares.every(winningLogic);
    setGameWon(gameWon)
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
        {gameWon && <VictoryCard moveCount={moveCount} resetGame={resetGame} />}
      </main>
    </div>
  );
}

export default App;
