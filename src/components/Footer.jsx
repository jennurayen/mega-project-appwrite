import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer-link">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/error">Error</NavLink>
        </li>
      </ul>
      <hr />
      <div className="copy-right">© Copyrigit by Rayen-Code</div>
    </footer>
  );
}

export default Footer;
