import React from "react";
import UserDashboardStyles from "./UserDashboardStyles";

const UserDashboard = () => {
  return (
    <div>
      <div className="container">
        <h2>Welcome, John Doe</h2>
        <div className="profile">
          <h3>Profile Information</h3>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p>
            <strong>Account Type:</strong> Student
          </p>
        </div>

        <div className="bookings">
          <h3>Upcoming Bookings</h3>
          <ul>
            <li>
              <p>
                <strong>Tutor:</strong> Jane Smith
              </p>
              <p>
                <strong>Subject:</strong> Mathematics
              </p>
              <p>
                <strong>Date:</strong> July 15, 2023
              </p>
              <p>
                <strong>Time:</strong> 4:00 PM - 5:00 PM
              </p>
            </li>
            <li>
              <p>
                <strong>Tutor:</strong> Alex Johnson
              </p>
              <p>
                <strong>Subject:</strong> English
              </p>
              <p>
                <strong>Date:</strong> July 17, 2023
              </p>
              <p>
                <strong>Time:</strong> 2:00 PM - 3:00 PM
              </p>
            </li>
          </ul>
        </div>
      </div>
      <UserDashboardStyles />
    </div>
  );
};

export default UserDashboard;
