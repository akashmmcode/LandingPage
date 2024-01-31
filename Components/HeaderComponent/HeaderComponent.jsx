import React from "react";
import "./HeaderComponent.css";
import logo from "../../src/assets/Logo.png";

const HeaderComponent = () => {
  function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="header">
        <img className="logo" src={logo}></img>
        <nav className="services">
          <a href="#" onClick={() => smoothScrollTo("home")}>
            <h3>Home</h3>
          </a>
          <a href="#about" onClick={() => smoothScrollTo("about")}>
            <h3>About</h3>
          </a>
          <a href="#works" onClick={() => smoothScrollTo("works")}>
            <h3>Works</h3>
          </a>
          <a href="#contact" onClick={() => smoothScrollTo("contact")}>
            <h3>Contact</h3>
          </a>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;
