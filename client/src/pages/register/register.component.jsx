import React from "react";
import Button from "./Button";

const UserRegistration = () => {
  return (
    <main>
      <div className="container">
        <h2>User Registration</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </main>
  );
};

export default UserRegistration;
