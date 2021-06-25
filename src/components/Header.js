import React from "react";
import "./Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Joshua Lee</h1>

      <nav>
        <ul>
          <li className="rookbIcon">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="bishopbIcon">
            <a href="#projects">Projects</a>
          </li>
          <li className="knightbIcon">
            <a href="#contactme">Contact Me</a>
          </li>
          <li className="bbishopbIcon rooka">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
