import React from 'react';
import './GameBoard.css';

import { Square } from '../Square/Square';

export const GameBoard = ({ squares }) => {
  const squaresDisplay = squares.map(square => <Square square={square} />)

  return (
    <section className="game-board">
      { squaresDisplay }
    </section>
  )
}
