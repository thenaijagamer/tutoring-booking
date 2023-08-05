import React from "react";
import SessionBookingsStyles from "./SessionBookingsStyles";

const SessionBookings = () => {
  return (
    <main>
      <div className="container">
        <h2>Tutor Booking</h2>
        <form>
          <label htmlFor="tutor">Tutor:</label>
          <select id="tutor" name="tutor">
            <option value="1">Jane Smith</option>
            <option value="2">John Doe</option>
          </select>

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" />

          <input type="submit" value="Book Session" />
        </form>
      </div>
      <SessionBookingsStyles />
    </main>
  );
};

export default SessionBookings;
