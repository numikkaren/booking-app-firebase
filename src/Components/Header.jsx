import React from "react";
import { Link } from "react-router-dom";

function Header() {


  return (
    <nav className="nav-bar">
      {/* Left: Logo */}
      <div className="nav-left">
        <div className="logo">MyLogo</div>
      </div>

      {/* Center: Search bar */}
      <div className="nav-center">
        <div className="search-bar">
          <span>Any Equipment</span>
          <div className="divider"></div>
          <span>Any Week</span>
          <div className="divider"></div>
          <span>Amount</span>
          <div className="search-icon">🔍</div>
        </div>
      </div>

      {/* Right: Profile Menu */}
      <div className="nav-right">
        <div className="profile-menu">
          <span className="menu-icon">☰</span>
          <img
            src="https://i.pravatar.cc/30"
            alt="user"
            className="user-icon"
          />
        </div>

      {/* Drop Down Menu */}
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/sign-up" className="nav-link">Sign up</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Header;