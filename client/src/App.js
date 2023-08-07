import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import UserRegistration from "./pages/register/register.component";
import UserLogin from "./pages/login/login.component";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
        {/* <Route path="/user-dasboard" element={<UserDashboard />} /> */}
        {/* <Route path="/detail">
          <Route path=":id" element={<DetailPage />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
