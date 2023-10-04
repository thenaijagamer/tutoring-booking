import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import UserRegistration from "./pages/register/register.component";
import UserLogin from "./pages/login/login.component";
import UserDashboard from "./pages/userDashboard/userDashboar.component";
import TutoringServices from "./pages/tutoringServices/tutorServices.component";
import SessionBookings from "./pages/sessionBooking/sessionBooking.component";
import Footer from "./components/footer/footer.component";
import BookingConfirmation from "./components/confirmation/confirmation.component";
import BookingHistory from "./pages/myBookings/myBookings.component";

function App() {
  const [user, setUser] = useState();
  const [bookings, setBooking] = useState([]);
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/login" element={<UserLogin />} />
            <Route
              path="/user-dashboard"
              element={<UserDashboard user={user} setUser={setUser} />}
            />
            <Route path="/services" element={<TutoringServices />} />
            <Route
              path="/history"
              element={<BookingHistory bookings={bookings} />}
            />

            <Route path="/session-booking">
              <Route
                path=":id"
                element={
                  <SessionBookings
                    bookings={bookings}
                    setBooking={setBooking}
                  />
                }
              />
            </Route>
            <Route path="/confirm" element={<BookingConfirmation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
