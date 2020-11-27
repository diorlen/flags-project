import React from "react";
import "./input.css";

const input = ({ ...props }) => {
  return (
    <div className="InputDiv">
      <i className="fas fa-search"></i>
      <input
        placeholder="Search for a country"
        className="Input"
        type="text"
        {...props}
      />
    </div>
  );
};

export default input;
