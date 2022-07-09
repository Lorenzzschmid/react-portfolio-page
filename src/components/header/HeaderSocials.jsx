import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";



const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" rel="noreferrer" target="_blank">
        <AiFillTwitterCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
