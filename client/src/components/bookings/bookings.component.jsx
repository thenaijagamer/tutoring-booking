import React from "react";
import BookingCard from "../bookingCard/bookingCard.component";

const Bookings = () => {
  return (
    <div className="bookings">
      <h3 className="bookings__header">Upcoming Bookings</h3>
      <ul className="bookings__container">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </ul>
    </div>
  );
};

export default Bookings;
