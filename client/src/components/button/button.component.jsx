import React from "react";

const Button = ({ children, confirmB, cancelB, handleClick }) => {
  return (
    <button
      onClick={confirmB ? handleClick : ""}
      className={`button ${cancelB ? "button__cancel" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
