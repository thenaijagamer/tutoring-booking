import React from "react";

const Button = ({ children, confirmB, cancelB }) => {
  return (
    <button
      className={`button ${confirmB ? "button__confirm" : ""} ${
        cancelB ? "button__cancel" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
