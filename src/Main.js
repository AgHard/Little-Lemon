import React, { useState, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import './Main.css'; // Import your CSS file

function Main() {
  // Function to initialize the initial state for availableTimes
  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  const navigate = useNavigate(); // Hook for navigation

  // Function to submit form data to the server
  function submitAPI(formData) {
    return fetch('https://example.com/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error submitting form:', error);
        throw error;
      });
  }

  function submitForm(formData) {
    submitAPI(formData)
      .then(response => {
        if (response.success) {
          navigate('/booking-confirmed');
        } else {
          console.error('Form submission failed:', response.error); // Handle submission failure
        }
      })
      .catch(error => {
        console.error('Form submission error:', error); // Handle network errors
      });
  }

  // Reducer function for managing state updates
  function availableTimesReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Logic to update availableTimes based on the selected date
        // For now, let's assume availableTimes remains the same regardless of the date
        return state;
      default:
        return state;
    }
  }

  // useReducer hook to manage state updates
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  // Function to handle state change based on the selected date
  function updateTimes(selectedDate) {
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  }

  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} /> {/* Route for ConfirmedBooking component */}
      </Routes>
    </main>
  );
}

export default Main;
