import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('2/1/2002');
  expect(headingElement).toBeInTheDocument();
});
