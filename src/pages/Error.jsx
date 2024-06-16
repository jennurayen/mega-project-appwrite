import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error-container">
        <h1 className="error-header">404</h1>
        <h3> This page Not found! </h3>
        <Link to="/" className="error-btn">
          home
        </Link>
      </div>
    </>
  );
}

export default Error;
