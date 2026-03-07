import React, { useState } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/feedback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Feedback sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
        setOpen(false);
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <>
      {/* Feedback Button */}
      <button className="feedback-btn" onClick={() => setOpen(true)}>
        Feedback
      </button>

      {/* Modal */}
      {open && (
        <div className="feedback-overlay">
          <div className="feedback-modal">
            <span className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </span>

            <h2>Feedback</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Start your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Send Feedback</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
