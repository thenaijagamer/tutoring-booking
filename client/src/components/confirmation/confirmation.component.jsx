import React from "react";
import Button from "../button/button.component";

const BookingConfirmation = () => {
  const confirmB = true;
  const cancelB = true;

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
        </div>
        <div className="confirmation__actions">
          <Button confirmB={confirmB}>Book session </Button>
          <Button cancelB={cancelB}>cancel Session</Button>
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
