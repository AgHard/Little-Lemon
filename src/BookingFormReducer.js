// BookingFormReducer.js

// Action types
const UPDATE_TIMES = 'UPDATE_TIMES';
import { fetchAPI } from './api';
// Reducer function for managing state updates
export function availableTimesReducer(state, action) {
  switch (action.type) {
    case UPDATE_TIMES:
      // Logic to update availableTimes based on the selected date
      // For now, let's assume availableTimes remains the same regardless of the date
      return state;
    default:
      return state;
  }
}

// Action creator for updating times
export function updateTimes(selectedDate) {
  return { type: UPDATE_TIMES, payload: selectedDate };
}

// Function to initialize the initial state for availableTimes
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export async function initializeTimes() {
    const today = new Date(); // Get today's date
    const formattedDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const availableTimes = await fetchAPI(formattedDate); // Fetch available times for today's date
    return availableTimes;
  }
  
  // Function to update available times based on selected date
  export async function updateTimes(selectedDate) {
    const availableTimes = await fetchAPI(selectedDate); // Fetch available times for selected date
    return availableTimes;
  }
