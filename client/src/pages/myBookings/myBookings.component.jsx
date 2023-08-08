import React from "react";
import Bookings from "../../components/bookings/bookings.component";

const BookingHistory = () => {
  return (
    <div className="bookings-page">
      <div className="bookings-page__container">
        <h2>Booking History / My Bookings</h2>
        <Bookings />
      </div>
    </div>
  );
};

export default BookingHistory;
