import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { ReactComponent as CancelIcon } from "../../icons/cancel-circle.svg";
import { ReactComponent as CheckIcon } from "../../icons/checkbox-checked.svg";

const BookingConfirmation = ({ setConfirm, name, subject, date, time }) => {
  const [displayStatus, setDisplayStatus] = useState(true);
  const navigate = useNavigate();
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
      setDisplayStatus(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="confirmation__container">
        {displayStatus ? (
          <>
            <CancelIcon
              className="confirmation__cancel"
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
              <Button onclick={handleClick}>Confirm session</Button>
            </div>
          </>
        ) : (
          <>
            <CheckIcon className="confirmation__check-icon" />
            <h1 className="confirmation__message">
              Session booked successfully
            </h1>
            <h3 className="confirmation__sub-message">
              You have successfully booked for a tutoring session with
              AcadeBooker. A reminder will be sent to your email an hour before
              the start of the session. Thanks for booking with AcadeBooker.
            </h3>
            <Button
              onclick={() => {
                navigate("/user-dashboard");
                setDisplayStatus(true);
              }}
            >
              Go to Home
            </Button>
          </>
        )}
      </div>
    </main>
  );
};

export default BookingConfirmation;
