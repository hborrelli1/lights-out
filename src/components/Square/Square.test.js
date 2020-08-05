import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Square } from './Square';

describe('Square Tests', () => {
  let mockToggleSquares;

  beforeEach(() => {
    mockToggleSquares = jest.fn();
  })

  it ('should render a square to the screen', () => {
    const sampleSquare = {
      id: 1,
      lightsOn: true
    }
    const { getByTestId } = render(<Square square={sampleSquare} toggleSquares={mockToggleSquares} />)

    expect(getByTestId('game-tile')).toBeInTheDocument();
  })

  it('should fire event when user clicks on square', () => {
    const sampleSquare = {
      id: 1,
      lightsOn: true
    }
    const { getByTestId } = render(<Square square={sampleSquare} toggleSquares={mockToggleSquares} />) 
    fireEvent.click(getByTestId('game-tile'));

    expect(mockToggleSquares).toHaveBeenCalledTimes(1);
  })
})