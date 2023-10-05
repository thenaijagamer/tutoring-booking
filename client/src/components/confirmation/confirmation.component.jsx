import React from "react";
import axios from "axios";
import Button from "../button/button.component";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

const BookingConfirmation = ({ setConfirm, name, subject, date, time }) => {
  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/bookings/history",
        {
          tutor: name,
          subject: subject,
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
    <main>
      <div className="confirmation__container">
        <CrossIcon
          className="confirmation__quit"
          onClick={() => {
            setConfirm(false);
          }}
        />
        <h2>Booking Confirmation</h2>
        <div className="confirmation__info">
          <h3>Booking Details</h3>
          <p>
            <strong>Tutor:</strong> {name}
          </p>
          <p>
            <strong>Subject:</strong> {subject}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time} - 5:00 PM
          </p>
        </div>
        <div className="confirmation__actions">
          <Button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Book session
          </Button>
          {/* <Button cancelB>cancel Session</Button> */}
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
