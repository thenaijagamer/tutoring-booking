import React from "react";
import Button from "./Button";

const UserLogin = () => {
  return (
    <main>
      <div className="container">
        <h2>User Login</h2>
        <form>
          <label htmlFor="loginEmail">Email:</label>
          <input type="email" id="loginEmail" name="loginEmail" required />

          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            required
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
};

export default UserLogin;
