import React from 'react'; 
import './footer.css';
import {AiFillTwitterSquare} from 'react-icons/ai'; 
import {SiCodewars} from 'react-icons/si'; 
import {SiTryhackme} from 'react-icons/si'; 


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#sources"></a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com"></a>
        <a href="https://www.codewars.com/users/Mighty%20Lo"></a>
        <a href="https://tryhackme.com/profile"></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Made with 💚 by Lorenz</small>
      </div>
    </footer>
  )
}

export default Footer