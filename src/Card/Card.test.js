/**
 * Unit teting card:
 * - we care about the card rendering when the correct information is passed down
 * - we care about the card correctly responding to user interaction
 *   - simulate a click, and make sure that removeIdea prop is invoked
 */

/**
 * Testing Framework - jest / react testing library 
 * Assertion library - Jest  / jest-dom 
 */

import React from 'react';
import Card from './Card';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // gives us toBeInTheDocument()

let mockedRemoveIdea, getByText;

beforeEach(() => {
   mockedRemoveIdea = jest.fn();
    getByText = render(<Card 
    id={1}
    title={'Good idea'}
    description={' Trust me'}
    removeIdea={mockedRemoveIdea}
    />).getByText;
}); 

it('should render when given the right props', () => {
  // we need to mock removeIdea 

    expect(getByText('Good idea')).toBeInTheDocument();
    expect(getByText('Trust me')).toBeInTheDocument();
});


it('should fire remove card when delete button is clicked', () => {
  // Find element to interact with
  const deleteButton = getByText('Delete')
  // fire an event on element
  fireEvent.click(deleteButton);

  //check that remove idea is called with the correct ID 
  expect(mockedRemoveIdea).toHaveBeenCalledWith(1);
});
