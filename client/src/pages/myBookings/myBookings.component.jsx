import React from "react";
import Bookings from "../../components/bookings/bookings.component";

const BookingHistory = ({ bookings }) => {
  return (
    <div className="bookings-page">
      <div className="bookings-page__container">
        <h2>Booking History / My Bookings</h2>
        <Bookings bookings={bookings} />
      </div>
    </div>
  );
};

export default BookingHistory;
