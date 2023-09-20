import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useRequireAuth from "../../auth";
import Bookings from "../../components/bookings/bookings.component";

const UserDashboard = ({ user, setUser }) => {
  useRequireAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/profile", {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    // // Check if the component has already mounted (using local storage)
    // const hasMounted = localStorage.getItem("userDashboardMounted");

    // if (!hasMounted) {
    //   // If not already mounted, fetch user data and mark as mounted
    //   getProfile();
    //   localStorage.setItem("userDashboardMounted", "true");
    // }
    getProfile();
  }, []);
  return (
    <>
      {user ? (
        <div className="user-dashboard">
          <div className="user-dashboard__container">
            <h2 className="user-dashboard__header">Welcome, {user.name}</h2>
            <div className="user-profile">
              <h3 className="user-profile__header">Profile Information</h3>
              <p className="user-profile__info user-profile__info--name">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="user-profile__info user-profile__info--email">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="user-profile__info user-profile__info--account-type">
                <strong>Account Type:</strong> Student
              </p>
            </div>
            <Bookings />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserDashboard;
