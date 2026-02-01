import React from "react";
import { Link, useNavigate } from "react-router-dom";
import  "../Physics subject/Allsubject.css";


export default function TheoryOfComputation() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      {/*  Header */}
      <div className="header">
        <h1> Theory Of Computation(TOC)</h1>
        <p>Conceptual Notes & Previous Year Questions</p>
      </div>

      {/*  Cards */}
      <div className="cards">

        {/* Notes */}
        <div className="card">
          <h2> Notes</h2>
          <p>
            Chapter-wise  notes with clear concepts,  
            diagrams and easy explanations.
          </p>
          <button className="action-btn"><Link to="/notes/theory of computation/notes">View Notes</Link></button>
        </div>

        {/* PYQs */}
        <div className="card">
          <h2> PYQs</h2>
          <p>
            Previous year questions with important topics  
            and exam-focused problems.
          </p>
          <button className="action-btn"><Link to="/notes/theory of computation/papers">View PYQs</Link></button>
        </div>

      </div>
    </div>
  );
}
