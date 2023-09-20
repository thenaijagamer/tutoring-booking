import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login logic here
    try {
      const response = await axios.post(
        "http://localhost:5050/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data); // Handle successful login
      localStorage.setItem("token", response.data.token);

      // alert("you have successfully registered");
      navigate("/user-dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__header">User Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label
            className="login__label login__label--email"
            htmlFor="loginEmail"
          >
            Email:
          </label>
          <input
            className="login__input login__input--email"
            type="email"
            id="loginEmail"
            name="loginEmail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="login__label login__label--password"
            htmlFor="loginPassword"
          >
            Password:
          </label>
          <input
            className="login__input login__input--password"
            type="password"
            id="loginPassword"
            name="loginPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value={"login"} />
        </form>
      </div>
      <p>
        New to AcadeBooker?
        <Link className="login__register-link" to={"/register"}>
          Join now
        </Link>
      </p>
    </div>
  );
};

export default UserLogin;
