import React from "react";
import Button from "../button/button.component";

const BookingCard = ({ booking }) => {
  return (
    <li className="booking">
      <div className="booking__container">
        <p className="booking__info booking__info--tutor">
          <strong>Tutor:</strong> john doe
        </p>
        <p className="booking__info booking__info--subject">
          <strong>Subject:</strong> Mathematics
        </p>
        <p className="booking__info booking__info--date">
          <strong>Date:</strong> 21st of september 2023
        </p>
        <p className="booking__info booking__info--time">
          <strong>Time:</strong>
          7:00am - 8:00am
        </p>
      </div>
      <Button>Cancel booking</Button>
    </li>
  );
};

export default BookingCard;
