import React from 'react'; 
import './about.css'; 
import Me from '../../assets/me2.png'; 
import {FaAward} from 'react-icons/fa'; 
import {FiUsers} from 'react-icons/fi'; 
import {VscFolderLibrary} from 'react-icons/vsc'; 

const About = () => {
  return (
    <section id='about'>
    
      <h5>Side-Facts</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div> 

          <div className="about__content">
            <div className="about__cards">
            {/* First experience container */}
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Practicing and Learning with Projects</small>
              </article>

            {/* second experience container */}
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Up for every Project</small>
              </article>

              {/* third experience container */}
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>Check my Github pendejo</small>
              </article>
            </div>

            <p>
              What the fuck is wrong with you, ...
            </p>

            <a href="#contact" className='btn btn-primary'>Happy to hear from you</a>

          </div>
        </div>
    </section>
  )
}

export default About