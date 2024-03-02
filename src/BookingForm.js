import React, { useState } from 'react';
import './BookingForm.css'; // Import your CSS file for styling

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  // Validation function
  function validateForm() {
    const isValid = date && guests >= 1; // Example validation logic
    setIsFormValid(isValid);
  }

  // Event handlers for input changes
  function handleDateChange(e) {
    setDate(e.target.value);
    validateForm();
  }

  function handleGuestsChange(e) {
    setGuests(e.target.value);
    validateForm();
  }

  // Event handler for form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    } else {
      alert('Please fill out all required fields.'); // Handling invalid form submission
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date:</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose Time:</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests:</label>
      <input type="number" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" className="submit-btn" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;
