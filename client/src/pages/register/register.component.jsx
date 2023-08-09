import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";

const UserRegistration = () => {
  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__header">User Registration</h2>
        <form className="register__form">
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
