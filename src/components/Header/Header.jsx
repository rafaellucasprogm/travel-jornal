import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav className="header">
        <img
          className="header-logo"
          src="src/assets/gobleIcon.svg"
          alt="Logo"
        />
        <p className="header-tittle">My travel journal</p>
      </nav>
    </div>
  );
}

export default Header;
