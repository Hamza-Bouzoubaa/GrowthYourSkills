import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step === 1) {
      // Validate inputs for Step 1
      if (!name.trim() || !email.trim() || !age) {
        alert('Please fill in all the fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    } else if (step === 2) {
      // Validate inputs for Step 2
      if (!selectedDate) {
        alert('Please select a date.');
        return;
      }
    }

    setStep(step + 1);
  };

  const validateEmail = (email) => {
    // Very basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBookingConfirmation = () => {
    // Set the bookingConfirmed state to true
    setBookingConfirmed(true);
    // Redirect to the main page after 3 seconds (adjust the delay as needed)
    setTimeout(() => {
      navigate('/GrowthYourSkills');
    }, 3000);
  };

  const renderProgressBar = () => {
    return (
      <div className="progress">
        <div className={`progress-bar progress-bar-striped bg-info`} style={{ width: `${(step / 3) * 100}%` }} />
      </div>
    );
  };

  const renderStepOne = () => {
    return (
      <div className="step-one">
        <h2>Step 1: Personal Information</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStepTwo = () => {
    return (
      <div className="step-two">
        <h2>Step 2: Class Date Selection</h2>
        <div className="form-group">
          <label>Select a date:</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary mr-2" onClick={() => setStep(step - 1)}>Previous</button>
        <button className="btn btn-primary" onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <div className="step-three">
        <h2>Step 3: Terms and Conditions</h2>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label className="form-check-label">I accept the terms and conditions.</label>
        </div>
        <button className="btn btn-secondary mr-2" onClick={() => setStep(step - 1)}>Previous</button>
        {/* Show the confirmation message after accepting terms and conditions */}
        <button
          className={`btn btn-primary ${!termsAccepted ? 'disabled' : ''}`}
          onClick={handleBookingConfirmation}
        >
          Book Now
        </button>
        {bookingConfirmed && renderConfirmationMessage()}
      </div>
    );
  };

  const renderConfirmationMessage = () => {
    return (
      <div className="confirmation-message">
        <h2>Booking Confirmed!</h2>
        <p>Your booking has been confirmed. You will be redirected to the main page shortly.</p>
      </div>
    );
  };

  return (
    <div className="booking-form container mt-5">
      {renderProgressBar()}
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
    </div>
  );
};

export default BookingForm;
