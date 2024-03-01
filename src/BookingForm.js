import React from 'react';

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  updateTimes
}) => {
  const [formValid, setFormValid] = useState(true);
  const [errors, setErrors] = useState({});
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    onSubmit(formData); // Call submitForm function passed via props
  };

  const validateForm = () => {
    const validationErrors = {};
    // Add validation logic here
    if (!date) {
      validationErrors.date = 'Date is required';
    }
    if (!time) {
      validationErrors.time = 'Time is required';
    }
    if (!guests || guests < 1 || guests > 10) {
      validationErrors.guests = 'Number of guests must be between 1 and 10';
    }
    if (!occasion) {
      validationErrors.occasion = 'Occasion is required';
    }
    setErrors(validationErrors);
    setFormValid(Object.keys(validationErrors).length === 0);
  };

  // Handle date change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate); // Dispatch state change for available times
  };

  return (
    <div>
    <header>
      <h1>Little Lemon Reserve-a-Table</h1>
    </header>
    <main>
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />
      {errors.date && <div className="error">{errors.date}</div>}

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {availableTimes.map((availableTime, index) => (
          <option key={index}>{availableTime}</option>
        ))}
      </select>
      {errors.time && <div className="error">{errors.time}</div>}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      {errors.guests && <div className="error">{errors.guests}</div>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {errors.occasion && <div className="error">{errors.occasion}</div>}

      <input type="submit" value="Make Your reservation" disabled={!formValid} />
    </form>
    </main>
      <footer>
        <p>&copy; 2024 Little Lemon</p>
      </footer>
    </div>
  );
};

export default BookingForm;
