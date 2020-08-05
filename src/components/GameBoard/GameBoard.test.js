import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { GameBoard } from './GameBoard';
import { sampleData } from '../../sampleData/sampleSquares';

describe('GameBoard', () => {
  let mockRender;
  let mockSquareData;
  let mockToggleSquares;

  beforeEach(() => {
    mockSquareData = sampleData;
    mockToggleSquares = jest.fn();
    mockRender = render(
      <GameBoard squares={mockSquareData} toggleSquares={mockToggleSquares} />
    )
  })

  it('should render the gameboard and tiles to DOM', () => {
    const { getAllByTestId } = mockRender;
    
    const gameTiles = getAllByTestId('game-tile')
    expect(gameTiles).toHaveLength(25);
  })
  
  it('User should be able to click on a square to toggle it.', () => {
    const { getAllByTestId } = mockRender;
    const gameTiles = getAllByTestId('game-tile')
    const tile1 = gameTiles[0]

    fireEvent.click(tile1);

    expect(mockToggleSquares).toHaveBeenCalledTimes(1);
  })
})