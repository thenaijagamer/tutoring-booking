import React from "react";
import Bookings from "../../components/bookings/bookings.component";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="user-dashboard__container">
        <h2 className="user-dashboard__header">Welcome, John Doe</h2>
        <div className="user-profile">
          <h3 className="user-profile__info-header">Profile Information</h3>
          <p className="user-profile__info user-profile__info--name">
            <strong>Name:</strong> John Doe
          </p>
          <p className="user-profile__info user-profile__info--email">
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p className="user-profile__info user-profile__info--account-type">
            <strong>Account Type:</strong> Student
          </p>
        </div>
        <Bookings />
      </div>
    </div>
  );
};

export default UserDashboard;
