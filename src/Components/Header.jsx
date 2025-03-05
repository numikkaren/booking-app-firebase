import React from "react";

function Header() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
            <a href="/" class="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="/sign-up" class="nav-link">Sign up</a>
        </li>
        <li className="nav-item">
            <a href="/login" class="nav-link">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;