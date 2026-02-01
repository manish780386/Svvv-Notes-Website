import React from "react";
import "./About.css";
import { GraduationCap, Users, Target, Mail } from "lucide-react";
import FeedbackForm from "../components/FeedbackForm";

export default function About() {
  return (
    <div className="about">
      {/* Header */}
      <section className="about-hero">
        <h1>
          About <span>Svvv Notes</span>
        </h1>
        <p>
          A student-focused platform made to simplify learning and boost exam
          performance.
        </p>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-card">
          <GraduationCap size={40} />
          <h3>Who We Are</h3>
          <p>
            Svvv Notes is created by students, for students. Our goal is to
            provide clean, easy-to-understand notes specially designed for SVVV
            exams.
          </p>
        </div>

        <div className="about-card">
          <Target size={40} />
          <h3>Our Mission</h3>
          <p>
            To make learning simple, organized and stress-free with
            exam-oriented, easy revision notes.
          </p>
        </div>

        <div className="about-card">
          <Users size={40} />
          <h3>Why Choose Us</h3>
          <p>
            Simple language, short notes, fast revision, and content created
            exactly as per student needs.
          </p>
        </div>

        
      </section>
       <FeedbackForm />
    </div>
  );
}
