// BookingForm.test.js

import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function fetches available booking times', () => {
  // Mock fetchAPI function to return non-empty array of available booking times
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  jest.spyOn(global, 'fetchAPI').mockResolvedValue(mockAvailableTimes);

  // Render BookingForm component
  render(<BookingForm />);

  // Ensure that the available times are updated after rendering
  const selectElement = screen.getByLabelText('Choose time');
  const options = screen.getAllByRole('option');
  expect(options).toHaveLength(mockAvailableTimes.length);
  mockAvailableTimes.forEach((time, index) => {
    expect(options[index].textContent).toEqual(time);
  });
});

test('updateTimes function updates available booking times based on selected date', () => {
  // Mock fetchAPI function to return non-empty array of available booking times
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  jest.spyOn(global, 'fetchAPI').mockResolvedValue(mockAvailableTimes);

  // Render BookingForm component
  render(<BookingForm />);

  // Dispatch state change for available times based on selected date
  const selectedDate = '2024-03-15'; // Example selected date
  const selectElement = screen.getByLabelText('Choose date');
  fireEvent.change(selectElement, { target: { value: selectedDate } });

  // Ensure that the available times are updated after dispatching state change
  const options = screen.getAllByRole('option');
  expect(options).toHaveLength(mockAvailableTimes.length);
  mockAvailableTimes.forEach((time, index) => {
    expect(options[index].textContent).toEqual(time);
  });
});
