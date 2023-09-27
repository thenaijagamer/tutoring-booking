import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useRequireAuth from "../../auth";

import tutorsData from "../../utility/tutors.json";

const SessionBookings = ({ bookings, setBooking }) => {
  useRequireAuth();
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
  const handleTimeChange = (e) => {
    let value = e.target.value;
    const min = e.target.min;
    const max = e.target.max;

    if (value < min || value > max) {
      console.log("Error");
      setTime("");
    } else {
      setTime(e.target.value);
    }

    //  alert("time doesnt correspond")
  };

  const currentDate = new Date();

  // Get the year, month, and day components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based (0 = January, 11 = December)
  const day = currentDate.getDate();

  const dateNow = `${year}-${
    month.toString().length == 1 ? `0${month}` : month
  }-${day.toString().length == 1 ? `0${day}` : day}`;

  // const startDate = new Date(dateNow);
  // const currentDateMax = startDate.setDate(startDate.getDate() + 30);
  // // Get the year, month, and day components
  // const yearMax = currentDateMax.getFullYear();
  // const monthMax = currentDateMax.getMonth() + 1; // Months are zero-based (0 = January, 11 = December)
  // const dayMax = currentDateMax.getDate();
  // const dateMax = `${yearMax}-${
  //   monthMax.toString().length == 1 ? `0${monthMax}` : monthMax
  // }-${dayMax.toString().length == 1 ? `0${dayMax}` : dayMax}`;
  // console.log(dateNow, dateMax);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(getTutorName, getTutorSubject, date, time);
    try {
      const response = await axios.post(
        "http://localhost:5050/api/bookings/history",
        {
          tutor: getTutorName,
          subject: getTutorSubject,
          date: date,
          startTime: time,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data); // Handle successful registration
      alert("you have booked for session successfully");
    } catch (error) {
      console.error(error);
    }
    // setBooking([
    //   ...bookings,
    //   {
    //     tutor: getTutorName,
    //     subject: getTutorSubject,
    //     date: date,
    //     time: time,
    //   },
    // ]);
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
            min={dateNow}
            // max="2017-04-30"
            required
            onChange={(e) => setDate(e.target.value)}
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
            min={"09:00"}
            max={"17:00"}
            onChange={(e) => setTime(e.target.value)}
            required
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
