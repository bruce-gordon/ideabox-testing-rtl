import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';

//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
//  ReactDOM.unmountComponentAtNode(div);
//});

// Checking that when the form is filled out, a new card appears on the dom 
//   - Firing events 
//   - verifying that elements render once the events are fired 

// when the app loads, and a user clicks on the View Ideas route, expected ideas are rendered on the dom 
//   - async 
//   - Firing events on a route
//   - verifying that elements render once events are 

it('Should load shout outs to page when view Ideas is clicked', async () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);

  fireEvent.click(getByText('View Ideas'));

  await waitFor(() => expect(getByText('We Are All In This Together')).toBeInTheDocument());

  
  
});

