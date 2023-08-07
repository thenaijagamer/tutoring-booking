import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";

const UserLogin = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__header">User Login</h2>
        <form className="login__form">
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
          />

          <Button type="submit">Login</Button>
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
