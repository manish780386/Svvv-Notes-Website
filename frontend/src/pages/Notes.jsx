import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";
import FeedbackForm from "../components/FeedbackForm";

const SUBJECTS_LIST = [
  
  
 
  "Theory Of Computation",
  "Introduction to Artificial Intelligence","Mathematics-2","Network Security and Cryptography","Concept of System Security","Discreate Structure",
  "Data Structures and Algorithms","Introduction to Data Science",
  "Introduction to Cloud Computing",
  "Complier Design",
  "Object Orientend Analysis and Design",
  "Internet of Things","Computer Network","Operating System","Data Communication","Computer System Organization",
  "Analysis and Design Algorithms","Database Management System","EMS","Environmental Science","DLCD","IDT","Object Oriented Programming","SEPM",
  "Introduction to core Java","Mathematics-1","Physics","Chemistry","Cyber law ,ethics and social media Analysis","Communication Skills","Cloud Computing","Fundamental of Information Security","ICSE","Data Science",
];

export default function Notes() {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearch(searchText.trim());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value === "") setSearch("");
  };

  const filteredSubjects = SUBJECTS_LIST.filter(subject =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  //  SUBJECT WISE JSX OPEN
  const openNotes = (subject) => {
    if (subject === "Mathematics") {
      navigate("/notes/mathematics");
    } else {
      navigate(`/notes/${subject}`);
    }
  };

  return (
    <div className="notes">

      <div className="notes-header">
        <h1>Notes & PYQs</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search subject..."
            value={searchText}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>
            <Search size={20} />
          </button>
        </div>
      </div>

      <div className="notes-cards">
        {filteredSubjects.map((subject, index) => (
          <div
            className="note-card"
            key={index}
            onClick={() => openNotes(subject)}
          >
            <h3>{subject}</h3>
            <p>Click to view Notes & PYQs</p>
          </div>
        ))}
      </div>
       <FeedbackForm />
    </div>
  );
}
