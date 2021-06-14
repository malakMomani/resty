import React from 'react';
import App from '../App.js';
import {render, fireEvent, screen} from '@testing-library/react';

test('Return a response from given URL' ,async ()=>{
  render(<App />);

  // // Click button
  fireEvent.click(screen.getByDisplayValue('GO!'))

  // Wait for page to update with query text
  const items = await screen.findAllByText('root');
  expect(items).toBeDefined();
});
