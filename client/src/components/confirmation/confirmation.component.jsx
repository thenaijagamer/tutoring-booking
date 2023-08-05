import React from "react";
import BookingConfirmationStyles from "./BookingConfirmationStyles";

const BookingConfirmation = () => {
  return (
    <main>
      <div className="container">
        <h2>Booking Confirmation</h2>
        <div className="confirmation-info">
          <h3>Booking Details</h3>
          <p>
            <strong>Tutor:</strong> Jane Smith
          </p>
          <p>
            <strong>Subject:</strong> Mathematics
          </p>
          <p>
            <strong>Date:</strong> July 15, 2023
          </p>
          <p>
            <strong>Time:</strong> 4:00 PM - 5:00 PM
          </p>
          <p>
            <strong>Status:</strong> Confirmed
          </p>
        </div>
      </div>
      <BookingConfirmationStyles />
    </main>
  );
};

export default BookingConfirmation;
