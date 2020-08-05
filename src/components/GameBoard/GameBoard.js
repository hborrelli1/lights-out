import React from 'react';
import './GameBoard.css';

import { Square } from '../Square/Square';

export const GameBoard = ({ squares, toggleSquares }) => {
  const squaresDisplay = squares.map(square => (
    <Square 
      key={square.id} 
      square={square} 
      toggleSquares={toggleSquares} 
    />
  ))

  return (
    <section className="game-board">
      { squaresDisplay }
    </section>
  )
}
