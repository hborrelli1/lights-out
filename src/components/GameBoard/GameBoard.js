import React from 'react';

import { Square } from '../Square/Square';

export const GameBoard = ({ squares }) => {
  const squaresDisplay = squares.map(square => <Square />)

  return (
    <div>
      { squaresDisplay }
    </div>
  )
}
