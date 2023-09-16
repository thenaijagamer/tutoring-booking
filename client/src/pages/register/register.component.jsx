import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/button/button.component";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__header">User Registration</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <label
            className="register__label register__label--name "
            htmlFor="name"
          >
            Full Name:
          </label>
          <input
            className="register__input"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label
            className="register__label register__label--email"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="register__input"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="register__label register__label--password"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="register__input"
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Register" />
        </form>
      </div>
      <p>
        Already have an account?
        <Link className="register__login-link" to={"/login"}>
          Login now
        </Link>
      </p>
    </div>
  );
};

export default UserRegistration;
