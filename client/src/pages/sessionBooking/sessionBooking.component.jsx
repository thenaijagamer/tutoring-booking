import React from "react";
import { useState, useEffect } from "react";
import tutorsData from "../../utility/tutors.json";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SessionBookings = ({ bookings, setBooking }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const getTutorName = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.name)
    .toString();
  const getTutorSubject = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.subject)
    .toString();
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getTutorName, getTutorSubject, date, time);
    setBooking([
      ...bookings,
      {
        tutor: getTutorName,
        subject: getTutorSubject,
        date: date,
        time: time,
      },
    ]);
  };

  return (
    <div className="session-booking">
      <div className="session-booking__container">
        <h2 className="session-booking__header">Tutor Booking</h2>
        <form className="session-booking__form" onSubmit={handleSubmit}>
          <label className="session-booking__label" htmlFor="tutor">
            Tutor:
          </label>
          <input
            className="session-booking__select"
            id="tutor"
            name="tutor"
            value={getTutorName}
            readOnly
          />

          <label className="session-booking__label" htmlFor="subject">
            Subject:
          </label>
          <input
            className="session-booking__input"
            id="subject"
            name="subject"
            value={getTutorSubject}
            readOnly
          />

          <label className="session-booking__label" htmlFor="date">
            Date:
          </label>
          <input
            className="session-booking__input"
            type="date"
            id="date"
            name="date"
            value={date}
            required
            onChange={handleDateChange}
          />

          <label className="session-booking__label" htmlFor="startTime">
            Starting Time:
          </label>
          <input
            className="session-booking__input"
            type="time"
            id="startTime"
            name="startTime"
            value={time}
            required
            onChange={handleTimeChange}
          />

          {/* <Link to={"/confirm"}> */}
          <input type="submit" value="Book Session" />
          {/* </Link> */}
        </form>
        <ul>
          {bookings ? (
            bookings.map((booking, index) => (
              <li key={index}>{booking.tutor}</li>
            ))
          ) : (
            <li>hello</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SessionBookings;
