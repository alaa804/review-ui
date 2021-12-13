import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <Link style={{ textDecoration: "none", color: "#ff6a95" }} to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
};
Header.defaultProps = {
  text: "Review UI",
  bgColor: "rgba( 0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
