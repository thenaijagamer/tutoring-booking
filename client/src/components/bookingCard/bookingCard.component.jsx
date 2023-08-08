import React from "react";
import Button from "../button/button.component";

const BookingCard = () => {
  return (
    <li className="booking">
      <div className="booking__container">
        <p className="booking__info booking__info--tutor">
          <strong>Tutor:</strong> Jane Smith
        </p>
        <p className="booking__info booking__info--subject">
          <strong>Subject:</strong> Mathematics
        </p>
        <p className="booking__info booking__info--date">
          <strong>Date:</strong> July 15, 2023
        </p>
        <p className="booking__info booking__info--time">
          <strong>Time:</strong> 4:00 PM - 5:00 PM
        </p>
      </div>
      <Button>Cancel booking</Button>
    </li>
  );
};

export default BookingCard;
