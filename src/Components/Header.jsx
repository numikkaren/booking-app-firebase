import React from "react";

function Header() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
            <a href="/" class="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="/owner-login" class="nav-link">Owner Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;