import React, {useState} from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/User-icon.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu(){

    setMenuOpen( (prev) => !prev);
  }

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
        <div className="profile-menu" onClick={toggleMenu}>
          <span className="menu-icon">☰</span>
          <div className="divider"></div>
          <img
            src={userIcon}
            alt="user"
            className="user-icon"
          />
      {/* Drop Down Menu */}
      {menuOpen && (
          // <ul className="nav-list">
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" className="nav-link">Home</Link></li>
             <li><Link to="/sign-up" className="nav-link">Sign up</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
           </ul>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Header;