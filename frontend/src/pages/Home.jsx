import React, { useState } from "react";
import "./Home.css";
import { BookOpen, FileText, Sparkles, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";


export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="home">
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleDrawer}>
        <Menu size={30} />
      </div>

      

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span>Svvv Notes</span>
        </h1>
        <p className="hero-subtitle">
          Simple • Clean • Exam Oriented Notes
        </p>

        <div className="hero-buttons">
          <button className="btn primary"><Link to="/notes">Explore Notes</Link></button>
          <button className="btn secondary"><Link to="/query">Ask Query</Link></button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="card">
          <BookOpen size={36} />
          <h3>Organized Notes</h3>
          <p>
            Subject-wise and unit-wise notes specially designed for SVVV students.
          </p>
        </div>

        <div className="card">
          <FileText size={36} />
          <h3>Exam Ready</h3>
          <p>
            Short, crisp and easy-to-remember notes to help you score better.
          </p>
        </div>

        <div className="card">
          <Sparkles size={36} />
          <h3>Student Friendly</h3>
          <p>
            Made by students, for students — simple language, no confusion.
          </p>
        </div>
      </section>
      <FeedbackForm />

    </div>
  );
}
