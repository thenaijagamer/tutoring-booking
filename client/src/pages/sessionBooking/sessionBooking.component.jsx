import React from "react";

const SessionBookings = () => {
  return (
    <div className="session-booking">
      <div className="session-booking__container">
        <h2 className="session-booking__header">Tutor Booking</h2>
        <form className="session-booking__form">
          <label className="session-booking__label" htmlFor="tutor">
            Tutor:
          </label>
          <select className="session-booking__select" id="tutor" name="tutor">
            <option value="1">Jane Smith</option>
            <option value="2">John Doe</option>
          </select>

          <label className="session-booking__label" htmlFor="subject">
            Subject:
          </label>
          <input
            className="session-booking__input"
            type="text"
            id="subject"
            name="subject"
          />

          <label className="session-booking__label" htmlFor="date">
            Date:
          </label>
          <input
            className="session-booking__input"
            type="date"
            id="date"
            name="date"
          />

          <label className="session-booking__label" htmlFor="time">
            Time:
          </label>
          <input
            className="session-booking__input"
            type="time"
            id="time"
            name="time"
          />

          <input type="submit" value="Book Session" />
        </form>
      </div>
    </div>
  );
};

export default SessionBookings;
