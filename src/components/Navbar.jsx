import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, LogoutBtn } from "./components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const authStatus = useSelector((state) => state.authSlice.status);
  const navigate = useNavigate();

  return (
    <nav>
      <Link className="logo">Logo</Link>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-post">All Post</NavLink>
        </li>
        <li>
          <NavLink to="/add-post">Add Post</NavLink>
        </li>

        {authStatus ? (
          <li>
            <LogoutBtn />
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
