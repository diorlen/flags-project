import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const header = ({ setDarkMode, darkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="Header">
      <div className="Content">
        <Link to="/">
          <h1 className="Title">
            <strong>Where in the world?</strong>
          </h1>
        </Link>
        <div className="dark-mode" tabIndex="0">
          <p onClick={handleClick}>
            <span className="moon">
              {darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="far fa-moon"></i>
              )}
            </span>
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
};

export default header;
