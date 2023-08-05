import React from "react";
import BookingHistoryStyles from "./BookingHistoryStyles";

const BookingHistory = () => {
  return (
    <main>
      <div className="container">
        <h2>Booking History / My Bookings</h2>
        <div className="booking-list">
          <h3>Completed Bookings</h3>
          <ul>
            <li>
              <p>
                <strong>Tutor:</strong> Jane Smith
              </p>
              <p>
                <strong>Subject:</strong> Mathematics
              </p>
              <p>
                <strong>Date:</strong> July 15, 2023
              </p>
              <p>
                <strong>Time:</strong> 4:00 PM - 5:00 PM
              </p>
            </li>
            <li>
              <p>
                <strong>Tutor:</strong> Alex Johnson
              </p>
              <p>
                <strong>Subject:</strong> English
              </p>
              <p>
                <strong>Date:</strong> July 17, 2023
              </p>
              <p>
                <strong>Time:</strong> 2:00 PM - 3:00 PM
              </p>
            </li>
          </ul>
        </div>
      </div>
      <BookingHistoryStyles />
    </main>
  );
};

export default BookingHistory;
