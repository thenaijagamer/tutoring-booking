import React from "react";
import { useState } from "react";

import BookingCard from "../bookingCard/bookingCard.component";

const Bookings = ({ bookings }) => {
  return (
    <div className="booking-list">
      <h3 className="booking-list__header">Upcoming Bookings</h3>
      <ul className="booking-list__container">
        {bookings.map((booking) => {
          <BookingCard booking={booking} />;
        })}
      </ul>
    </div>
  );
};

export default Bookings;
