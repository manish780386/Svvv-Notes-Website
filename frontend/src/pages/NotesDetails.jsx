import React from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import "./NotesDetails.css";

export default function NotesDetails() {
  const { subject } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-wrapper">

      <button className="back-btn" onClick={() => navigate(-1)}>
         Back
      </button>

      <div className="details-header">
        <h1>{subject}</h1>
        <p>Complete Notes & Previous Year Questions</p>
      </div>

      <div className="details-cards">

        <div className="details-card">
          <h2> Notes</h2>
          <p>
            Well structured notes for <b>{subject}</b>.  
            Easy language & exam oriented.
          </p>
          <button className="action-btn"><Link to={`/notes/${subject}/notes`}>View Notes</Link></button>
        </div>

        <div className="details-card">
          <h2> PYQs</h2>
          <p>
            Previous year questions of <b>{subject}</b>.
          </p>
          <button className="action-btn"><Link to={`/notes/${subject}/pyqs`}>View PYQs</Link></button>
        </div>

      </div>
    </div>
  );
}
