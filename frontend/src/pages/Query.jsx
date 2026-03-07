import React, { useState } from "react";
import "./Query.css";
import FeedbackForm from "../components/FeedbackForm";

export default function Query() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    language: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://svvv-notes-website-com.onrender.com/api/query/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Query submitted successfully ✅");
        setForm({ name: "", email: "", language: "", message: "" });
      } else {
        alert("Failed to submit query ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="query">
      <h1>Submit Your Query</h1>
      <p>We are here to help. Fill the form below!</p>

      <form className="query-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Subject
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Mathematics-1">Mathematics-1</option>
            <option value="Physics">Physics</option>
            <option value="Operating System">Operating System</option>
            <option value="DBMS">Database Management System</option>
            <option value="Computer Network">Computer Network</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit Query</button>
      </form>

      <FeedbackForm />
    </div>
  );
}
