import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useRequireAuth from "../../auth";

import tutorsData from "../../utility/tutors.json";

const SessionBookings = () => {
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

  const currentDate = new Date();

  // Get the year, month, and day components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based (0 = January, 11 = December)
  const day = currentDate.getDate();

  // Create a formatted date string (YYYY-MM-DD)
  const dateNow = `${year}-${
    month.toString().length == 1 ? `0${month}` : month
  }-${day.toString().length == 1 ? `0${day}` : day}`;

  // Create a Date object from the input date dateNow
  const originalDate = new Date(year, month - 1, day);

  // Add the specified number of days to the originalDate
  const currentDateMax = new Date(
    originalDate.setDate(originalDate.getDate() + 30)
  );

  // Get the year, month, and day components from new date object
  const yearMax = currentDateMax.getFullYear();
  const monthMax = currentDateMax.getMonth() + 1; // Months are zero-based (0 = January, 11 = December)
  const dayMax = currentDateMax.getDate();

  // Create a formatted date string (YYYY-MM-DD) for new date
  const dateMax = `${yearMax}-${
    monthMax.toString().length == 1 ? `0${monthMax}` : monthMax
  }-${dayMax.toString().length == 1 ? `0${dayMax}` : dayMax}`;

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
      console.log(response.data); // Handle successful booking
      alert("you have booked for session successfully");
    } catch (error) {
      console.error(error);
    }
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
            max={dateMax}
            required
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="session-booking__label" htmlFor="startTime">
            Starting Time:
          </label>
          <select
            id="startTime"
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Choose time</option>
            <option value="09:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">1:00 PM</option>
            <option value="02:00 PM">2:00 PM</option>
            <option value="03:00 PM">3:00 PM</option>
            <option value="04:00 PM">4:00 PM</option>
            <option value="05:00 PM">5:00 PM</option>
          </select>
          <input type="submit" value="Book Session" />
        </form>
      </div>
    </div>
  );
};

export default SessionBookings;
