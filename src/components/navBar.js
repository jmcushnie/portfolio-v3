import React, { useState } from "react";

function NavBar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#">resume</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
