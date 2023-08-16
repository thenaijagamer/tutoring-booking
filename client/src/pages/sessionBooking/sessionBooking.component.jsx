import React from "react";
import { useState } from "react";
import tutorsData from "../../utility/tutors.json";

import { useParams } from "react-router-dom";

const SessionBookings = ({ booking, setBooking }) => {
  const [bookings, setBookings] = useState([{}]);
  const { id } = useParams();
  const getTutorName = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.name);
  const getTutorSubject = tutorsData
    .filter((tutor) => id === tutor.id.toString())
    .map((tutor) => tutor.subject);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setBookings(...Bookings, { name: getTutorName, subject: getTutorSubject });
  // };

  const [inputValues, setInputValues] = useState({
    tutor: getTutorName[0],
    subject: getTutorSubject[0],
    date: "",
    startTime: "09:00",
    endTime: "10:00",
  });

  const [dataArray, setDataArray] = useState([]);

  const addObject = () => {
    const newObject = { key: "value" }; // Replace with your object data
    setDataArray((prevArray) => [...prevArray, newObject]);
    console.log(dataArray);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleBookings = () => {
    const newData = { ...inputValues };
    setBookings((prev) => [...prev, newData]);
    console.log(bookings);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", inputValues);
    // handleBookings();
    const newData = { ...inputValues };
    setBookings((prev) => [...prev, newData], console.log(bookings));
    // console.log(bookings);
    setInputValues({});

    // You can perform further actions with the input values here
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
            value={inputValues.date}
            required
            onChange={handleInputChange}
          />

          <label className="session-booking__label" htmlFor="startTime">
            Starting Time:
          </label>
          <input
            className="session-booking__input"
            type="time"
            id="startTime"
            name="startTime"
            value={inputValues.startTime}
            required
            onChange={handleInputChange}
          />
          <label className="session-booking__label" htmlFor="endTime">
            Ending Time:
          </label>
          <input
            className="session-booking__input"
            type="time"
            id="endTime"
            name="endTime"
            value={inputValues.endTime}
            required
            onChange={handleInputChange}
          />

          <input type="submit" value="Book Session" />
        </form>
      </div>
    </div>
  );
};

export default SessionBookings;
