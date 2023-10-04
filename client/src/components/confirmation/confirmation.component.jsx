import React from "react";
import Button from "../button/button.component";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

const BookingConfirmation = () => {
  return (
    <main>
      <div className="confirmation__container">
        <CrossIcon className="confirmation__quit" />
        <h2>Booking Confirmation</h2>
        <div className="confirmation__info">
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
          <Button>Book session</Button>
          {/* <Button cancelB>cancel Session</Button> */}
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
