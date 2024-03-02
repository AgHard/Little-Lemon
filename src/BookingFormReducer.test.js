import { availableTimesReducer, initializeTimes, updateTimes } from './BookingFormReducer';
import { fetchAPI } from './api'; // Import the fetchAPI function

// Mock the fetchAPI function to return mock data
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['17:00', '18:00', '19:00'])), // Mocking fetchAPI to return a non-empty array
}));

// Test the initializeTimes function
test('initializeTimes returns the correct value', async () => {
  const initialTimes = await initializeTimes(); // Call initializeTimes
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00']); // Expectation to match mock data
});
// Test for initializeTimes function
test('initializeTimes returns the correct value', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// Test for availableTimesReducer function (updateTimes action)
test('availableTimesReducer updates times correctly', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const selectedDate = '2024-03-03'; // Example selected date
  const action = updateTimes(selectedDate);
  const updatedState = availableTimesReducer(initialState, action);
  // For now, the reducer should return the same state
  expect(updatedState).toEqual(initialState);
});

