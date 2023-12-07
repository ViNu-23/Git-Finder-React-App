import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h2>About Git Finder</h2>
        <p className="about-text">
          Git Finder is a web application that allows users to search for GitHub
          users by their usernames. Additionally, the app provides information
          about the repositories associated with the searched user.
        </p>
        <h2>Features</h2>
        <ul className="about-text">
          <li>
            <strong>User Search:</strong> Users can enter a GitHub username in
            the search bar. The app fetches and displays information about the
            user, including their profile details and a list of repositories.
          </li>
          <li>
            <strong>Repository View:</strong> Users can view a list of
            repositories associated with the searched GitHub user. Each
            repository entry includes details such as the repository name,
            description, language, and the number of stars.
          </li>
        </ul>
        <h2>Getting Started</h2>
        <p className="about-text">
          To get started, clone the Git Finder repository and follow the
          installation instructions in the
          <code> README.md</code> file.
        </p>
      </div>
      <Link to="https://github.com/ViNu-23">
        <div className="footer">
          <span>Visit Profile</span>
          <FaGithub className="git-logo-about" />
        </div>
      </Link>
    </>
  );
}
