import React from "react";

const BookingCard = () => {
  return (
    <li className="booking">
      <p className="booking__info booking__info--tutor">
        <span>Tutor:</span> Jane Smith
      </p>
      <p className="booking__info booking__info--subject">
        <span>Subject:</span> Mathematics
      </p>
      <p className="booking__info booking__info--date">
        <span>Date:</span> July 15, 2023
      </p>
      <p className="booking__info booking__info--time">
        <span>Time:</span> 4:00 PM - 5:00 PM
      </p>
    </li>
  );
};

export default BookingCard;
