// Header.js

import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <nav>
        {/* Add a button to toggle the sidebar on smaller screens */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`primary-nav ${showSidebar ? "show-sidebar" : ""}`}>
          <li>
            <a href="/">Biography</a>
          </li>
          <li>
            <a href="/discography">Discography</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
