import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  FileText,
  Info,
  HelpCircle,
  Menu,
} from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="nav-left">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>

        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="brand">Svvv Notes</Link>

        {/* Three line icon */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <Menu size={22} />
        </button>
      </div>

      {/* Right section */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><Link to="/"><Home size={16} /> Home</Link></li>
        <li><Link to="/notes"><FileText size={16} /> Notes</Link></li>
        <li><Link to="/about"><Info size={16} /> About</Link></li>
        <li><Link to="/query"><HelpCircle size={16} /> Query</Link></li>
      </ul>
    </nav>
  );
}
