import React from "react";
import { useState } from "react";

import BookingCard from "../bookingCard/bookingCard.component";

const Bookings = ({ bookings, setBoo }) => {

  return (
    <div className="booking-list">
      <h3 className="booking-list__header">Upcoming Bookings</h3>
      <ul className="booking-list__container">
        {/* {bookings.map((booking) => {
          <BookingCard booking={booking} />;
        })} */}
        <BookingCard booking={bookings} />
        <BookingCard booking={bookings} />
        <BookingCard booking={bookings} />
        <BookingCard booking={bookings} />
      </ul>
    </div>
  );
};

export default Bookings;
