import React from "react";
import "./Notfound.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-home">Go Back Home</Link>
      </div>
    </div>
  );
}
