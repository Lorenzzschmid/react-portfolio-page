import React from "react";
import CTA from "./Cv";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="main-container header__container">
        <h5>Hi I'm</h5>
        <h1>Lorenz</h1>
        <h5 className="text-lighter">Junior Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
