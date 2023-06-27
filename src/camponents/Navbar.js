import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-0">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="nav-item">
            <NavLink className="nav-link logo" to="/">
              Logo
            </NavLink>
          </div>
          <ul className="nav d-flex align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carrier">
                carrier
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Stranger",
};
