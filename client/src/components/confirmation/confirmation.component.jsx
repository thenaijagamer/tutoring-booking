import React from "react";
import axios from "axios";
import Button from "../button/button.component";
import { ReactComponent as CancelIcon } from "../../icons/cancel-circle.svg";
import { ReactComponent as CheckIcon } from "../../icons/checkbox-checked.svg";

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
        {/* <CancelIcon
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
          <Button confirmB handleClick={handleClick}>
            Book session
          </Button>
        </div> */}
        <CheckIcon className="confirmation__check-icon" />
        <div className="confirmation__message">Session booked successfully</div>
        <div className="confirmation__sub-message">
          You have successfully booked for a tutoring session with AcadeBooker.
          A reminder will be sent to your email an hour before the start of the
          session. Thanks for booking with AcadeBooker.
        </div>
        <Button>Go to the user dashboard</Button>
      </div>
    </main>
  );
};

export default BookingConfirmation;
