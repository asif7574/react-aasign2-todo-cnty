import React from "react";
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav class="navbar">
        {" "}
        <div class="logo">Your Logo</div>{" "}
        <ul class="nav-links">
          {" "}
          <li>
            <a href="#home">Home</a>
          </li>{" "}
          <li>
            <a href="#about">About</a>
          </li>{" "}
          <li>
            <a href="#services">Services</a>
          </li>{" "}
          <li>
            <a href="#contact">Contact</a>
          </li>{" "}
        </ul>{" "}
        <div class="burger">
          {" "}
          <div class="line1"></div> <div class="line2"></div>{" "}
          <div class="line3"></div>{" "}
        </div>{" "}
      </nav>
    </div>
  );
}

export default Navbar;
