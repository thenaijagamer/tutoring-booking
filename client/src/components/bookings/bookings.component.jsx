import React from "react";
import { useState } from "react";

import BookingCard from "../bookingCard/bookingCard.component";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  return (
    <div className="booking-list">
      <h3 className="booking-list__header">Upcoming Bookings</h3>
      <ul className="booking-list__container">
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
