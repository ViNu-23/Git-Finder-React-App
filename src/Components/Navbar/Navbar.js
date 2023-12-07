import { Link } from "react-router-dom";
import { TbBrandGithubCopilot } from "react-icons/tb";
import "./Navbar.css";
import { React, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  const titleClassName = clickCount > 5 ? 'glowing-title' : '';
  return (
    <nav className="nav-bar">
      <div className="left-nav-section">
        <Link to="https://github.com/ViNu-23">
          <TbBrandGithubCopilot className="git-logo" />
        </Link>

        <span className={`title ${titleClassName}`} onClick={handleButtonClick}>Git-Finder</span>
      </div>

      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar1 ${isMenuOpen ? "rotate-down" : ""}`}></div>
        <div className={`bar2 ${isMenuOpen ? "hidden" : ""}`}></div>
        <div className={`bar3 ${isMenuOpen ? "rotate-up" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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
