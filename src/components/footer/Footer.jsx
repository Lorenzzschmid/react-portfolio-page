import React from 'react'; 
import './footer.css';
import {AiFillTwitterSquare} from 'react-icons/ai'; 
import {SiCodewars} from 'react-icons/si'; 
import {SiTryhackme} from 'react-icons/si'; 


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lorenz Schmid</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#sources">Sources</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>
        <a href="https://www.codewars.com/users/Mighty%20Lo"><SiCodewars/></a>
        <a href="https://tryhackme.com/profile"><SiTryhackme/></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Made with 💚 by Lorenz</small>
      </div>
    </footer>
  )
}

export default Footer