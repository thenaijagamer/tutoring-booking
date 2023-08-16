import React from "react";
import Button from "../button/button.component";

const BookingCard = ({ booking }) => {
  return (
    <li className="booking">
      <div className="booking__container">
        <p className="booking__info booking__info--tutor">
          <strong>Tutor:</strong> {booking.tutor}
        </p>
        <p className="booking__info booking__info--subject">
          <strong>Subject:</strong> {booking.subject}
        </p>
        <p className="booking__info booking__info--date">
          <strong>Date:</strong> {booking.date}
        </p>
        <p className="booking__info booking__info--time">
          <strong>Time:</strong>
          {booking.startTime} - {booking.endTime}
        </p>
      </div>
      <Button>Cancel booking</Button>
    </li>
  );
};

export default BookingCard;
