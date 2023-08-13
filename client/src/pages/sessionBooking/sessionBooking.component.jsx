import React from "react";
import tutorsData from "../../utility/tutors.json";

import { useParams } from "react-router-dom";

const SessionBookings = () => {
  const { id } = useParams();
  const getTutorName = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.name);
  const getTutorSubject = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.subject);
  return (
    <div className="session-booking">
      <div className="session-booking__container">
        <h2 className="session-booking__header">Tutor Booking</h2>
        <form className="session-booking__form">
          <label className="session-booking__label" htmlFor="tutor">
            Tutor:
          </label>
          <input
            className="session-booking__select"
            id="tutor"
            name="tutor"
            value={getTutorName}
          />

          <label className="session-booking__label" htmlFor="subject">
            Subject:
          </label>
          <input
            className="session-booking__input"
            id="subject"
            name="subject"
            value={getTutorSubject}
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
