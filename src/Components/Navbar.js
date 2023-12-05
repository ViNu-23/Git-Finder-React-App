import React from "react";
import { Link } from "react-router-dom";
import { TbBrandGithubCopilot } from "react-icons/tb";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left-nav-section">
        <TbBrandGithubCopilot className="git-logo" />
        <span className="title">Git-Finder</span>
      </div>
    
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-links-rm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links-rm">
              About
            </Link>
          </li>
        </ul>
    
    </nav>
  );
}
