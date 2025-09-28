import React from "react";
import "./style.css";

const ButtonLooking = ({ text }) => {
  return (
    <button className="button-looking">
      <span>{text}</span>
    </button>
  );
};

export default ButtonLooking;
