import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Main = () => {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Reducer for available times
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, availableTimes: action.payload };
      default:
        return state;
    }
  };

  const history = useHistory();

  const submitForm = (formData) => {
    // Logic to submit form data to the API
    const bookingSuccessful = submitAPI(formData); // Assuming submitAPI is provided by the API library
    if (bookingSuccessful) {
      history.push('/confirmed-booking'); // Navigate to booking confirmation page
    } else {
      // Handle error or display notification to user
    }
  };

  const initialState = {
    availableTimes: [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]
  };

  const [timesState, dispatchTimes] = useReducer(timesReducer, initialState);

  // Function to update available times based on selected date
  const updateTimes = (selectedDate) => {
    // Logic to update available times based on selected date
    const updatedTimes = ['17:00', '18:00', '19:00']; // Dummy data for now
    dispatchTimes({ type: 'UPDATE_TIMES', payload: updatedTimes });
  };

  // Function to initialize available times
  const initializeTimes = () => {
    // Logic to initialize available times
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Initial available times
    dispatchTimes({ type: 'UPDATE_TIMES', payload: initialTimes });
  };

  // Call initializeTimes when component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div>
      <h1>Little Lemon Reserve-a-Table</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={timesState.availableTimes}
        updateTimes={updateTimes}
      />
       <h1>Little Lemon Reserve-a-Table</h1>
      <BookingForm onSubmit={submitForm} />
    </div>
  );
};

export default Main;
